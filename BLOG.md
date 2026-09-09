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
| FAQ visible | `components/blog/article-faq.tsx` |
| Tipografía del cuerpo | `.prose-article` en `app/globals.css` |
| Sitemap y robots | `app/sitemap.ts`, `app/robots.ts` |

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
- [ ] `npm run build` sin errores
- [ ] Enviado a indexación en Search Console
- [ ] Publicado como Post en el Perfil de Empresa de Google, enlazando al artículo

## Decisiones tomadas y por qué

**No se creó `/blog/sangrado-al-defecar/`.** Ya existía
`/blog/sangrado-al-evacuar-causas/` cubriendo la misma intención de búsqueda.
Dos URLs compitiendo por la misma keyword se canibalizan, así que el artículo
existente se reescribió en su lugar conservando el slug: no pierde la
indexación acumulada y no hace falta un redirect que mantener.

**No se crearon páginas de silo.** Con cuatro artículos, cinco índices de silo
tendrían una o dos entradas cada uno. Eso es contenido delgado y perjudica más
de lo que ayuda. Vale la pena retomarlo alrededor de los 15 artículos.

**No se crearon las money pages `/tratamientos/*` ni `/sobre-el-doctor/`.**
Son un cambio de arquitectura de la landing, no contenido de blog. Mientras
tanto, `TreatmentBlock` apunta a `/#procedimientos`, que ya existe. Cuando se
creen las páginas, basta cambiar el `href` por defecto de ese componente.

**El breadcrumb tiene tres niveles, no cuatro.** El documento pide
Inicio › Blog › Silo › Artículo, pero las páginas de silo no existen y apuntar
un breadcrumb a una URL inexistente genera error en Search Console.

## Artículos pendientes

Del mapa de la estrategia, los P1 que faltan: A2 (tratamiento de hemorroides en
Puebla), B2 (dolor al defecar), B4 (bolita en el ano), C1 (láser vs. convencional
— bloqueado por `TECNICAS_QX`), D1 (colonoscopia, pilar), D2 (señales de cáncer
de colon), E1 (fisura anal). Después, los P2 y P3.
