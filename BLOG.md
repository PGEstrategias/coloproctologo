# Blog — guía de operación

Cómo está armado el blog, cómo publicar un artículo nuevo y qué falta confirmar
antes de dar por cerrado el contenido.

## Pendientes que bloquean contenido

Estos son los `[[PLACEHOLDER]]` del documento de estrategia. **Ninguno está
inventado en el código**: donde hacía falta el dato, el texto se redactó para no
necesitarlo, o el artículo no se escribió.

| Pendiente | Qué falta | Quién lo confirma | Qué bloquea hoy |
|---|---|---|---|
| `TECNICAS_QX` | Qué técnicas quirúrgicas realiza el Dr. (láser, THD, hemorroidopexia, hemorroidectomía convencional) | Dr. Fernández | El artículo C1 (láser vs. convencional). En A1 el apartado de grado IV dice "la técnica se elige en la valoración" en vez de enumerar técnicas. |
| `COSTO_CONSULTA` | Precio de consulta, o la decisión de no publicarlo | Dr. Fernández | La FAQ "¿Cuánto cuesta la consulta?" se omitió de C3. |
| `RANGO_INCAPACIDAD` | Días de recuperación típicos por técnica | Dr. Fernández | La FAQ de incapacidad en A1 responde "se define en la valoración preoperatoria", sin cifras. |
| `META_SESIONES` / `META_LEADS` | Objetivos a 6 meses | PG Estrategias | Nada en código; es medición. |
| Dominio de producción | La URL real del sitio | PG Estrategias | Ver más abajo. |

> **Validación clínica.** Todo el copy es borrador estructural. El Dr. Fernández
> debe revisar y aprobar cada artículo antes de publicarlo. No agregar
> afirmaciones sobre técnicas, tiempos de recuperación o tasas de éxito que él no
> haya confirmado.

## Dominio

`config/site.ts` lee `NEXT_PUBLIC_SITE_URL` y cae en `https://drjosemanuelfernandez.com`
si no está definida. **Ese fallback es una suposición.** Hay que definir la
variable en Vercel (Settings → Environment Variables) con el dominio real, porque
de ella dependen el `sitemap.xml`, las URLs del schema y los breadcrumbs.

## Dónde vive cada cosa

| Pieza | Archivo |
|---|---|
| Datos de contacto, cédulas, ubicación | `config/site.ts` |
| Registro de artículos | `lib/blog-posts.ts` |
| Plantilla de artículo | `components/blog/blog-post-layout.tsx` |
| JSON-LD (MedicalWebPage + FAQPage + BreadcrumbList) | `components/blog/article-schema.tsx` |
| Tabla de contenido | `components/blog/article-toc.tsx` |
| Bloque de señales de alarma | `components/blog/red-flags.tsx` |
| Bloque "cómo se trata" + enlace interno | `components/blog/treatment-block.tsx` |
| Bloque "temas relacionados" | `components/blog/related-posts.tsx` |
| FAQ visible | `components/blog/article-faq.tsx` |
| Tipografía del cuerpo | `.prose-article` en `app/globals.css` |
| Sitemap y robots | `app/sitemap.ts`, `app/robots.ts` |
| Verificador de la norma | `scripts/qa-blog.mjs` |

`config/site.ts` es la fuente única: el número de WhatsApp, las cédulas y la
dirección ya no están hardcodeados en ningún componente. Si cambia un dato, se
cambia ahí y se propaga a la landing y al blog.

## Publicar un artículo nuevo

1. **Registrarlo** en `lib/blog-posts.ts` con su `slug`, `title`, `description`,
   `category` (silo), `keyword`, fechas y `readTime`. Marcar `esPilar: true` solo
   si es el artículo largo del silo — hay uno por silo.
2. **Crear** `app/blog/<slug>/page.tsx`. La forma más rápida es copiar
   `app/blog/primera-consulta-proctologo/page.tsx`, que usa todos los bloques.
3. **Definir** `toc`, `faqs` y `tema`:
   - Cada `id` de la `toc` debe existir como `<h2 id="...">` en el cuerpo.
     Los bloques `RedFlags` y `TreatmentBlock` traen sus propios ids por defecto
     (`cuando-acudir` y `como-se-trata`).
   - `faqs` alimenta a la vez el bloque visible y el marcado `FAQPage`, así que
     no se pueden desincronizar.
   - `tema` construye el mensaje de WhatsApp del CTA. Es lo que permite atribuir
     en el CRM qué artículo generó el lead, sin instrumentación extra.
4. **Enlazar**: un enlace al pilar del silo y un `TreatmentBlock` que apunte a la
   sección de procedimientos. Máximo un enlace externo, y solo a fuente de
   autoridad.

## Verificación automática

`npm run build && npm run qa:blog` comprueba cada artículo contra los estándares
on-page, leyendo el HTML ya generado en vez del código fuente. Falla con código 1,
así que sirve tal cual en CI.

Lo que verifica: longitud del `<title>` y que coincida con el registro; meta
description de 150 a 155 caracteres; extensión (1200–1800 palabras en pilares,
800–1200 en satélites); que cada ancla de la tabla de contenido tenga su
encabezado; dos enlaces internos como mínimo; los tres bloques de schema y que la
FAQ tenga al menos cuatro preguntas; la keyword primaria en H1, en un H2 y en la
meta; "Puebla" entre 2 y 4 veces; el lenguaje que la norma prohíbe; y porcentajes
sin fuente.

El bloque "Temas relacionados" se descuenta del conteo de palabras y de menciones
locales: su texto son títulos y descripciones de otros artículos, no prosa propia.

## Checklist antes de publicar

- [ ] Revisado y aprobado clínicamente por el Dr. Fernández
- [ ] Title ≤ 60 caracteres, meta description 150–155
- [ ] Keyword primaria en H1, primer párrafo, un H2 y la meta
- [ ] Párrafo de resumen de 40–60 palabras
- [ ] Mínimo 2 enlaces internos (uno al pilar, uno a procedimientos)
- [ ] Cada ancla de la TOC tiene su `<h2 id="...">`
- [ ] FAQ con mínimo 4 preguntas
- [ ] Schema validado en Rich Results Test
- [ ] CTA con `tema` propio del artículo
- [ ] `npm run build && npm run qa:blog` en verde
- [ ] Enviado a indexación en Search Console
- [ ] Publicado como Post en el Perfil de Empresa de Google, enlazando al artículo

## Decisiones tomadas y por qué

**No se creó `/blog/sangrado-al-defecar/`.** Ya existía
`/blog/sangrado-al-evacuar-causas/` cubriendo la misma intención de búsqueda.
Dos URLs compitiendo por la misma keyword se canibalizan, así que el artículo
existente se reescribió en su lugar conservando el slug: no pierde la
indexación acumulada y no hace falta un redirect que mantener.

**No se crearon páginas de silo.** Con diez artículos, cinco índices de silo
tendrían una o dos entradas cada uno. Eso es contenido delgado y perjudica más
de lo que ayuda. Vale la pena retomarlo alrededor de los 15 artículos.

**No se crearon las money pages `/tratamientos/*` ni `/sobre-el-doctor/`.**
Son un cambio de arquitectura de la landing, no contenido de blog. Mientras
tanto, `TreatmentBlock` apunta a `/#procedimientos`, que ya existe. Cuando se
creen las páginas, basta cambiar el `href` por defecto de ese componente.

**El breadcrumb tiene tres niveles, no cuatro.** El documento pide
Inicio › Blog › Silo › Artículo, pero las páginas de silo no existen y apuntar
un breadcrumb a una URL inexistente genera error en Search Console.

**El artículo de cirugía se reescribió.** La versión anterior de
`cuanto-duele-cirugia-hemorroides` mencionaba hemorroidopexia y desarterialización
guiada por Doppler, técnicas que no están confirmadas ni aparecen en la landing, e
incluía un cronograma con "Día 7: vuelta al trabajo" y "Semana 3-4: recuperación
total". Ambas cosas incumplen la norma: técnicas no confirmadas y tiempos de
recuperación que `RANGO_INCAPACIDAD` deja pendientes. Se sustituyeron por una
explicación del origen del dolor y por la forma de la curva de recuperación, sin
cifras.

## Artículos pendientes

Los diez P1 del mapa están publicados salvo **C1 (cirugía: láser vs. convencional)**,
bloqueado por `TECNICAS_QX`. Quedan los catorce P2 y P3, que en el documento de
estrategia solo existen como renglón: A3, A4, A5, B3, B5, C2, C4, D3, D4 y E2 a E6.
Antes de escribirlos hay que definirles el ángulo y los H2, como tienen los briefs
de la fase 1.

Dos silos siguen sin pilar: **Procedimientos** y **Otras patologías**. Cuando
crezcan, conviene designar uno para que el enlazado interno tenga hacia dónde
apuntar.
