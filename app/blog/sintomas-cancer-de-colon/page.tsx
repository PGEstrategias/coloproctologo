import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "sintomas-cancer-de-colon")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "silencioso", label: "Por qué es silencioso al inicio" },
  { id: "cuando-acudir", label: "Las 8 señales de alarma" },
  { id: "riesgo", label: "Factores de riesgo: los que puedes cambiar y los que no" },
  { id: "edad", label: "A qué edad empezar a estudiarse" },
  { id: "como-se-trata", label: "Cómo se detecta" },
  { id: "prevenible", label: "Por qué el cáncer de colon sí se puede prevenir" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿A qué edad debo empezar?",
    respuesta:
      "Las guías actuales sitúan el inicio del tamizaje alrededor de los 45 años en personas sin factores de riesgo. Con antecedente familiar de cáncer de colon o de pólipos, se empieza antes; la edad exacta la define el médico según tu historia familiar.",
  },
  {
    pregunta: "¿Y si no tengo antecedentes familiares?",
    respuesta:
      "Igual te corresponde el tamizaje por edad. Una parte importante de los casos ocurre en personas sin ningún antecedente familiar, así que no tenerlos no exime del estudio.",
  },
  {
    pregunta: "¿La prueba de sangre oculta sustituye a la colonoscopia?",
    respuesta:
      "No la sustituye. Es una prueba de tamizaje que puede detectar sangrado no visible, pero si sale positiva el siguiente paso es de todos modos una colonoscopia. Y una prueba negativa no descarta un pólipo que no esté sangrando en ese momento.",
  },
  {
    pregunta: "¿Es hereditario?",
    respuesta:
      "Existen síndromes hereditarios que aumentan mucho el riesgo, pero son la minoría de los casos. Lo más frecuente es el antecedente familiar sin síndrome identificado, que igual eleva el riesgo y adelanta la edad de tamizaje.",
  },
  {
    pregunta: "¿Se cura?",
    respuesta:
      "El pronóstico depende de la etapa en que se detecta, y esa es exactamente la razón de este artículo. Detectado de forma temprana, el panorama es muy distinto que cuando se diagnostica tarde. No es una pregunta que se responda en general, sino con un diagnóstico concreto.",
  },
]

const senales = [
  ["Sangre en las evacuaciones", "Sobre todo si es oscura o viene mezclada con la materia fecal, no solo en el papel."],
  ["Cambio en el hábito intestinal", "Diarrea, estreñimiento o alternancia entre ambos, que dura más de tres semanas."],
  ["Heces delgadas o en forma de listón", "Un cambio sostenido en el calibre, no un episodio aislado."],
  ["Sensación de evacuación incompleta", "La impresión de que el recto no se vacía, aun después de evacuar."],
  ["Dolor o cólico abdominal persistente", "Que no se explica por otra causa y no cede."],
  ["Pérdida de peso involuntaria", "Sin haber cambiado dieta ni actividad física."],
  ["Cansancio o palidez", "Suele reflejar anemia por un sangrado que no se ve."],
  ["Anemia sin causa identificada", "Especialmente en hombres y en mujeres después de la menopausia."],
]

export default function Page() {
  return (
    <>
      <ArticleSchema
        titulo={post.title}
        descripcion={post.description}
        slug={post.slug}
        fechaPublicacion={post.dateISO}
        condicion="Cáncer colorrectal"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        tema="las señales de cáncer de colon"
        ctaTitle="Estudiarse a tiempo cambia el panorama"
        ctaSubtitle="El cáncer de colon es de los pocos que se pueden prevenir, porque su lesión precursora se puede quitar antes. La valoración es discreta y toma menos de 30 minutos."
        reviewerNote="Ninguna de estas señales significa cáncer por sí sola; significan que hace falta descartar."
        summary={
          <>
            El cáncer de colon no duele al inicio, y esa es su característica más peligrosa. Cuando aparecen síntomas, suelen ser sangrado, cambio del hábito intestinal, heces delgadas o anemia sin explicación. <strong>Ninguna de esas señales significa cáncer por sí sola</strong>, pero todas obligan a descartarlo. Es de los pocos cánceres que se pueden prevenir.
          </>
        }
      >
        <div>
          <h2 id="silencioso" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Por qué es silencioso al inicio
          </h2>
          <p className="text-gray-700">
            Casi todos los cánceres de colon empiezan como un pólipo: un crecimiento benigno en la pared interna del intestino. Ese pólipo puede tardar años en transformarse.
          </p>
          <p className="text-gray-700 mt-3">
            Durante ese tiempo no duele, no sangra de forma visible y no altera nada perceptible. El colon es un tubo ancho: una lesión pequeña no obstruye ni produce molestia.
          </p>
          <p className="text-gray-700 mt-3">
            Cuando por fin aparecen síntomas, la lesión ya creció lo suficiente para sangrar o para estrechar el paso. <strong>Ahí está el problema: los síntomas no son un sistema de alerta temprana.</strong> Llegan tarde por diseño.
          </p>
          <p className="text-gray-700 mt-3">
            Esa es toda la lógica del tamizaje: buscar la lesión en personas que se sienten sanas, precisamente porque sentirse bien no descarta nada en esta enfermedad.
          </p>
        </div>

        <RedFlags
          titulo="Las 8 señales de alarma"
          intro="Cualquiera de estas señales justifica una valoración:"
          senales={senales.map(([titulo, detalle]) => `${titulo}. ${detalle}`)}
        />

        <div>
          <p className="text-gray-700">
            Conviene decirlo con claridad, sin minimizar y sin alarmar: <strong>ninguna de estas señales significa cáncer por sí misma.</strong> Casi todas son mucho más frecuentes por causas benignas. El sangrado, de hecho, es casi siempre hemorroidal o por fisura.
          </p>
          <p className="text-gray-700 mt-3">
            Lo que significan es que hace falta descartar. Y el retraso diagnóstico en esta enfermedad ocurre, en buena parte, porque el paciente se autodiagnosticó{" "}
            <Link href="/blog/hemorroides-guia-completa" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              hemorroides
            </Link>{" "}
            durante meses y nunca lo verificó.
          </p>
        </div>

        <div>
          <h2 id="riesgo" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Factores de riesgo: los que puedes cambiar y los que no
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">No modificables</h3>
              <ul className="space-y-1.5">
                {[
                  "Edad",
                  "Antecedente familiar de cáncer de colon o pólipos",
                  "Antecedente personal de pólipos",
                  "Enfermedad inflamatoria intestinal de larga evolución",
                  "Síndromes hereditarios",
                ].map((s) => (
                  <li key={s} className="flex gap-2 text-gray-700">
                    <span className="text-gray-400 flex-shrink-0" aria-hidden="true">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Modificables</h3>
              <ul className="space-y-1.5">
                {[
                  "Tabaquismo",
                  "Consumo de alcohol",
                  "Sobrepeso y obesidad",
                  "Sedentarismo",
                  "Dieta alta en carnes procesadas y baja en fibra",
                ].map((s) => (
                  <li key={s} className="flex gap-2 text-gray-700">
                    <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Tener factores de riesgo no significa que vayas a desarrollar la enfermedad, y no tenerlos no te exime del tamizaje por edad. Los factores ajustan el riesgo; no lo determinan.
          </p>
        </div>

        <div>
          <h2 id="edad" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            A qué edad empezar a estudiarse
          </h2>
          <p className="text-gray-700">
            Las guías actuales sitúan el inicio del tamizaje alrededor de los <strong>45 años</strong> en personas sin factores de riesgo particulares.
          </p>
          <p className="text-gray-700 mt-3">
            Con antecedente familiar de cáncer de colon o de pólipos, se empieza antes. Cuánto antes depende de qué familiar fue y a qué edad se le diagnosticó, así que es una decisión que se toma en consulta con tu historia familiar en la mano.
          </p>
          <p className="text-gray-700 mt-3">
            Y si hay síntomas, la edad deja de importar. Un sangrado a los 30 años se estudia igual que a los 60.
          </p>
        </div>

        <TreatmentBlock titulo="Cómo se detecta">
          <p>
            <strong>Exploración proctológica.</strong> Es el primer paso ante un sangrado, y en una consulta de coloproctología en Puebla se hace el mismo día. Identifica las causas benignas del canal anal, que son la enorme mayoría.
          </p>
          <p>
            <strong>Prueba de sangre oculta en heces.</strong> Detecta sangrado no visible. Es una herramienta de tamizaje: si sale positiva, el siguiente paso es una colonoscopia.
          </p>
          <p>
            <strong>Colonoscopia.</strong> Es el estudio de referencia. Permite ver el colon completo, tomar biopsias y, sobre todo, extirpar pólipos en el mismo acto. Si quieres saber cómo es y cómo prepararte, lo explicamos a fondo en la{" "}
            <Link href="/blog/colonoscopia-que-es-como-prepararse" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              guía de colonoscopia
            </Link>
            .
          </p>
        </TreatmentBlock>

        <div>
          <h2 id="prevenible" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Por qué el cáncer de colon sí se puede prevenir
          </h2>
          <p className="text-gray-700">
            En la mayoría de los cánceres, detectar temprano significa tratar antes. En el de colon significa algo más: <strong>se puede quitar la lesión antes de que llegue a ser cáncer.</strong>
          </p>
          <p className="text-gray-700 mt-3">
            El pólipo es visible, alcanzable y extirpable durante el mismo estudio que lo encuentra. Esa secuencia —buscar, encontrar y quitar en un solo acto— es lo que convierte al tamizaje en prevención real y no solo en detección.
          </p>
          <p className="text-gray-700 mt-3">
            Es también la razón por la que este es el artículo que más vale la pena compartir con alguien de tu familia que ya pasó de los 45 y nunca se ha estudiado. Si están en Puebla, la valoración es el primer paso y toma menos de 30 minutos.
          </p>
        </div>
      </BlogPostLayout>
    </>
  )
}
