/**
 * QA del blog contra los estándares on-page de la estrategia de contenido.
 *
 * Se ejecuta sobre el HTML ya generado, así que verifica lo que de verdad
 * llega al navegador y no lo que el código pretende emitir.
 *
 *   npm run build && node scripts/qa-blog.mjs
 *
 * Sale con código 1 si algún artículo incumple, para poder encadenarlo en CI.
 */

import { readFileSync, existsSync } from "node:fs"

const DIR = ".next/server/app/blog"

// Términos que la norma de redacción prohíbe explícitamente.
const PROHIBIDOS = [
  /\bel mejor\b/i,
  /\bla mejor\b/i,
  /\blíder en\b/i,
  /\bgarantiza(?:mos|do)?\b/i,
  /\bcura(?:ción)? (?:total|definitiva|garantizada)\b/i,
  /\b100\s?% (?:efectiv|segur|garantiz)/i,
  /\bsin dolor alguno\b/i,
  /\bresultados? garantizados?\b/i,
]

const registro = readFileSync("lib/blog-posts.ts", "utf8")

/** Lee los campos del registro sin necesidad de compilar TypeScript. */
function leerRegistro() {
  const posts = []
  const bloques = registro.split(/\n  \{\n/).slice(1)
  for (const bloque of bloques) {
    const campo = (nombre) => {
      const m = bloque.match(new RegExp(`${nombre}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`))
      return m ? m[1] : null
    }
    const slug = campo("slug")
    if (!slug) continue
    posts.push({
      slug,
      seoTitle: campo("seoTitle"),
      description: campo("description"),
      keyword: campo("keyword"),
      esPilar: /esPilar:\s*true/.test(bloque),
    })
  }
  return posts
}

const quitarTags = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
const decodificar = (s) =>
  s
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))

const normalizar = (s) =>
  decodificar(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")

let fallos = 0
let avisos = 0
const posts = leerRegistro()

console.log(`Verificando ${posts.length} artículos contra los estándares on-page.\n`)

for (const post of posts) {
  const ruta = `${DIR}/${post.slug}.html`
  if (!existsSync(ruta)) {
    console.log(`✗ ${post.slug}: no se generó HTML. ¿Corriste npm run build?`)
    fallos++
    continue
  }

  const html = readFileSync(ruta, "utf8")
  const errores = []
  const notas = []

  // Contenido propio del artículo: del H1 al cierre del cuerpo.
  const desdeH1 = html.indexOf("<h1")
  const hastaArticle = html.indexOf("</article>")
  const cuerpo = html.slice(desdeH1, hastaArticle > 0 ? hastaArticle : undefined)
  // Para longitud y densidad local se descuenta "Temas relacionados": su texto
  // son títulos y descripciones de otros artículos, no prosa de este. Las
  // anclas y los enlaces sí se cuentan sobre el cuerpo completo.
  const prosa = cuerpo.replace(/<div data-qa="related">[\s\S]*$/, "")
  const texto = decodificar(quitarTags(prosa))
  const textoNorm = normalizar(prosa)
  const palabras = texto.split(/\s+/).filter(Boolean).length

  // 1. Title <= 60 caracteres, y el que se emite coincide con el registro.
  const titleTag = html.match(/<title>([^<]*)<\/title>/)
  const titleReal = titleTag ? decodificar(titleTag[1]) : ""
  if (titleReal.length > 60) errores.push(`title de ${titleReal.length} caracteres (máx. 60): "${titleReal}"`)
  if (post.seoTitle && titleReal !== post.seoTitle)
    errores.push(`el <title> emitido no coincide con seoTitle: "${titleReal}"`)

  // 2. Meta description entre 150 y 155 caracteres.
  const descTag = html.match(/<meta name="description" content="([^"]*)"/)
  const descReal = descTag ? decodificar(descTag[1]) : ""
  if (!descReal) errores.push("sin meta description")
  else if (descReal.length < 150 || descReal.length > 155)
    errores.push(`meta description de ${descReal.length} caracteres (rango 150–155)`)

  // 3. Longitud: pilares 1200–1800, satélites 800–1200.
  const [min, max] = post.esPilar ? [1200, 1800] : [800, 1200]
  if (palabras < min) errores.push(`${palabras} palabras, por debajo del mínimo de ${min}`)
  else if (palabras > max) notas.push(`${palabras} palabras, por encima de ${max} (${post.esPilar ? "pilar" : "satélite"})`)

  // 4. Cada ancla de la tabla de contenido tiene su encabezado.
  const anclas = [...new Set([...cuerpo.matchAll(/href="#([a-z0-9-]+)"/g)].map((m) => m[1]))]
  const ids = new Set([...cuerpo.matchAll(/<h2 id="([a-z0-9-]+)"/g)].map((m) => m[1]))
  const rotas = anclas.filter((a) => !ids.has(a))
  if (rotas.length) errores.push(`anclas sin encabezado: ${rotas.join(", ")}`)
  if (anclas.length === 0) errores.push("sin tabla de contenido")

  // 5. Al menos dos enlaces internos.
  const internos = [...new Set([...cuerpo.matchAll(/href="(\/(?:blog\/|#)[^"]*)"/g)].map((m) => m[1]))]
  if (internos.length < 2) errores.push(`solo ${internos.length} enlace(s) interno(s), se piden 2`)

  // 6. Schema: MedicalWebPage, FAQPage y BreadcrumbList.
  const ld = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)
  if (!ld) errores.push("sin JSON-LD")
  else {
    try {
      const tipos = JSON.parse(decodificar(ld[1])).map((b) => b["@type"])
      for (const t of ["MedicalWebPage", "FAQPage", "BreadcrumbList"])
        if (!tipos.includes(t)) errores.push(`falta el bloque ${t} en el schema`)
      const faqs = JSON.parse(decodificar(ld[1])).find((b) => b["@type"] === "FAQPage")
      if (faqs && faqs.mainEntity.length < 4)
        errores.push(`solo ${faqs.mainEntity.length} preguntas en la FAQ, se piden 4`)
    } catch (e) {
      errores.push(`JSON-LD inválido: ${e.message}`)
    }
  }

  // 7. Keyword primaria en H1, resumen, un H2 y la meta description.
  const kw = normalizar(post.keyword)
  const h1 = normalizar(html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] ?? "")
  const h2s = [...cuerpo.matchAll(/<h2[^>]*>(.*?)<\/h2>/gs)].map((m) => normalizar(m[1])).join(" ")
  // Con keywords de varias palabras basta con que aparezca el término núcleo.
  const nucleo = kw.split(" ").filter((w) => w.length > 3)
  const contiene = (donde) => nucleo.some((w) => donde.includes(w))
  if (!contiene(h1)) errores.push(`la keyword "${post.keyword}" no aparece en el H1`)
  if (!contiene(h2s)) errores.push(`la keyword "${post.keyword}" no aparece en ningún H2`)
  if (!contiene(normalizar(descReal))) errores.push(`la keyword "${post.keyword}" no aparece en la meta description`)

  // 8. "Puebla" entre 2 y 4 veces.
  const puebla = (textoNorm.match(/puebla/g) ?? []).length
  if (puebla < 2) errores.push(`"Puebla" aparece ${puebla} vez/veces (mínimo 2)`)
  else if (puebla > 4) errores.push(`"Puebla" aparece ${puebla} veces (máximo 4)`)

  // 9. Lenguaje prohibido por la norma de redacción.
  for (const patron of PROHIBIDOS) {
    const m = texto.match(patron)
    if (m) errores.push(`lenguaje prohibido: "${m[0]}"`)
  }

  // 10. Porcentajes sin fuente.
  const pct = texto.match(/\b\d{1,3}\s?%/g)
  if (pct) errores.push(`porcentaje sin fuente: ${pct.join(", ")}`)

  const etiqueta = post.esPilar ? "pilar" : "satélite"
  if (errores.length === 0) {
    console.log(`✓ ${post.slug} (${etiqueta}, ${palabras} palabras)`)
    for (const n of notas) {
      console.log(`  ~ ${n}`)
      avisos++
    }
  } else {
    console.log(`✗ ${post.slug} (${etiqueta}, ${palabras} palabras)`)
    for (const e of errores) console.log(`  → ${e}`)
    for (const n of notas) console.log(`  ~ ${n}`)
    fallos++
  }
}

console.log(
  `\n${posts.length - fallos}/${posts.length} artículos cumplen la norma.` +
    (avisos ? ` ${avisos} aviso(s) no bloqueante(s).` : "")
)
process.exit(fallos ? 1 : 0)
