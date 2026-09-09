import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "bolita-en-el-ano")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "causas", label: "Qué puede ser, de lo más común a lo más grave" },
  { id: "distinguir", label: "Cómo se distingue una bolita de otra" },
  { id: "que-no-hacer", label: "Qué NO debes hacer" },
  { id: "como-se-trata", label: "Cómo se resuelve en consulta" },
  { id: "cuando-acudir", label: "Cuándo acudir sin esperar" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Puedo reventarla?",
    respuesta:
      "No. Es la peor decisión posible. Si es una trombosis, no se vacía por presión y solo lastimas el tejido. Si es un absceso, abrirlo sin condiciones estériles extiende la infección. Y si es una lesión que debe estudiarse, la destruyes antes de que alguien la vea.",
  },
  {
    pregunta: "¿Es cáncer?",
    respuesta:
      "La enorme mayoría de las bolitas en el ano son benignas: trombosis, plicomas, quistes o verrugas. El cáncer de esta zona es poco frecuente. Pero es una de las posibilidades que se descartan en la exploración, y por eso una lesión que no cede debe revisarse en vez de vigilarse en casa.",
  },
  {
    pregunta: "¿Se quita sola?",
    respuesta:
      "Depende de qué sea. Una hemorroide trombosada cede lentamente por sí sola. Un plicoma no desaparece, queda como piel sobrante. Un absceso no se resuelve solo: requiere drenaje. Las verrugas tampoco desaparecen sin tratamiento.",
  },
  {
    pregunta: "¿Duele quitarla?",
    respuesta:
      "Los procedimientos de esta zona se realizan con anestesia local o el tipo de anestesia que corresponda al caso. El dolor que ya traes suele ser mayor que el del procedimiento, sobre todo en una trombosis o un absceso.",
  },
  {
    pregunta: "¿Cuánto tarda en desaparecer?",
    respuesta:
      "Varía según la causa y el tratamiento. No hay un plazo único, y desconfía de quien te dé una cifra sin haberte explorado. Se define en la valoración.",
  },
]

const causas = [
  {
    n: "1",
    titulo: "Hemorroide externa trombosada",
    clave: "Bolita dura, morada, muy dolorosa, de aparición súbita",
    detalle:
      "La causa más frecuente. Un coágulo dentro de una hemorroide externa. Aparece de golpe, con frecuencia después de un esfuerzo o de un episodio de estreñimiento. El dolor es máximo en las primeras horas.",
  },
  {
    n: "2",
    titulo: "Plicoma (colgajo cutáneo)",
    clave: "Piel blanda y sobrante, indolora, permanente",
    detalle:
      "Es lo que queda después de que una trombosis se resolvió: el tejido se distendió y no volvió a su lugar. No duele, no sangra y no es peligroso. Molesta por higiene y por estética.",
  },
  {
    n: "3",
    titulo: "Absceso perianal",
    clave: "Zona endurecida, caliente, dolor creciente y fiebre",
    detalle:
      "Una colección de pus. Es la única de esta lista que constituye urgencia quirúrgica: requiere drenaje, y ningún antibiótico lo sustituye. El dolor aumenta hora tras hora en lugar de ceder.",
  },
  {
    n: "4",
    titulo: "Quiste pilonidal",
    clave: "Bulto en el pliegue entre los glúteos, no en el borde del ano",
    detalle:
      "Se ubica más arriba, en la línea media del pliegue interglúteo. Puede infectarse y drenar. Su ubicación es lo que lo distingue: no está en el margen anal.",
  },
  {
    n: "5",
    titulo: "Verrugas anales",
    clave: "Lesiones múltiples, pequeñas, de superficie irregular",
    detalle:
      "Asociadas al virus del papiloma humano. Suelen ser varias en vez de una sola, no duelen y crecen lentamente. Requieren tratamiento porque no desaparecen solas y son transmisibles.",
  },
  {
    n: "6",
    titulo: "Lesión que debe estudiarse",
    clave: "Endurecida, que no cede, que sangra o que cambia con el tiempo",
    detalle:
      "Poco frecuente, pero es la razón por la que una bolita que no se resuelve no se vigila en casa. Cualquier lesión persistente en esta zona merece exploración.",
  },
]

export default function Page() {
  return (
    <>
      <ArticleSchema
        titulo={post.title}
        descripcion={post.description}
        slug={post.slug}
        fechaPublicacion={post.dateISO}
        condicion="Tumoración perianal"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        tema="una bolita en el ano"
        ctaTitle="No tienes que vivir con esto"
        ctaSubtitle="Casi todas las bolitas en el ano son benignas y se resuelven en consulta. La valoración es discreta y toma menos de 30 minutos."
        reviewerNote="Una lesión perianal que no cede debe explorarse, no vigilarse en casa."
        summary={
          <>
            Palparse una bolita en el ano asusta, y la reacción es normal. <strong>La causa más frecuente es una hemorroide externa trombosada</strong>, que es benigna y dolorosa. Le siguen el plicoma, el absceso, el quiste pilonidal y las verrugas anales. Lo que las distingue es el dolor, la consistencia y si hay fiebre.
          </>
        }
      >
        <div>
          <h2 id="causas" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Qué puede ser, de lo más común a lo más grave
          </h2>
          <div className="space-y-3">
            {causas.map((c) => (
              <div key={c.titulo} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
                  {c.n}. {c.titulo}
                </h3>
                <p className="text-green-800 text-sm font-medium mb-1.5">{c.clave}</p>
                <p className="text-gray-700">{c.detalle}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 id="distinguir" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Cómo se distingue una bolita de otra
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left font-bold text-gray-900 p-3 rounded-tl-lg">Si la bolita…</th>
                  <th className="text-left font-bold text-gray-900 p-3 rounded-tr-lg">Orientación probable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Apareció de golpe, es dura y duele mucho", "Hemorroide externa trombosada"],
                  ["Es blanda, no duele y lleva ahí meses", "Plicoma"],
                  ["Crece, arde, hay fiebre y calor local", "Absceso perianal"],
                  ["Está en el pliegue entre los glúteos, no en el ano", "Quiste pilonidal"],
                  ["Son varias, pequeñas y no duelen", "Verrugas anales"],
                  ["Está endurecida, sangra o cambia con el tiempo", "Requiere exploración sin demora"],
                ].map(([sintoma, orientacion]) => (
                  <tr key={sintoma} className="border-b border-gray-200">
                    <td className="p-3 text-gray-700 align-top">{sintoma}</td>
                    <td className="p-3 text-gray-700 align-top">{orientacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4">
            Esta tabla orienta, no diagnostica: en Puebla o donde sea, esta zona requiere exploración física. Si además tienes dolor al evacuar, el artículo sobre{" "}
            <Link href="/blog/dolor-al-defecar" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              dolor al defecar
            </Link>{" "}
            desarrolla el diagnóstico diferencial por tipo de dolor.
          </p>
        </div>

        <div>
          <h2 id="que-no-hacer" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué NO debes hacer
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <ul className="space-y-2">
              {[
                "No la revientes ni intentes drenarla. Es la causa más frecuente de complicación evitable en esta zona.",
                "No la cortes ni la ligues con nada. Ni hilo, ni ligas, ni remedios caseros.",
                "No apliques sustancias irritantes. Alcohol, yodo o preparaciones caseras inflaman el tejido y dificultan la exploración posterior.",
                "No esperes a que crezca para revisarla. Lo que se estudia bien es lo que todavía no se manipuló.",
                "No la fotografíes para autodiagnosticarte en internet. Esta zona requiere exploración física; ninguna imagen la sustituye.",
              ].map((s) => (
                <li key={s} className="flex gap-2 text-gray-700">
                  <span className="text-red-500 flex-shrink-0" aria-hidden="true">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <TreatmentBlock titulo="Cómo se resuelve en consulta">
          <p>
            En una consulta de coloproctología en Puebla, la inspección resuelve la mayoría de estos diagnósticos a simple vista, en menos de un minuto. El tacto rectal y la anoscopía completan el cuadro cuando hace falta descartar un componente interno.
          </p>
          <p>
            El tratamiento depende de qué sea. Una trombosis se maneja según el tiempo de evolución. Un absceso requiere drenaje, y es el único que no admite espera. Un plicoma puede dejarse si no molesta. Las verrugas requieren tratamiento dirigido.
          </p>
          <p>
            Lo importante es que <strong>ninguna de estas decisiones se puede tomar sin ver la lesión</strong>. Es una consulta corta que evita meses de incertidumbre.
          </p>
        </TreatmentBlock>

        <RedFlags
          titulo="Cuándo acudir sin esperar"
          intro="Busca atención el mismo día si:"
          senales={[
            "Hay fiebre junto con el dolor",
            "La zona está endurecida, caliente y crece hora tras hora",
            "Sale pus o líquido con mal olor",
            "El dolor no te permite sentarte ni caminar",
            "La lesión sangra sin que la hayas tocado",
            "Lleva semanas sin cambiar y está endurecida",
          ]}
        />
      </BlogPostLayout>
    </>
  )
}
