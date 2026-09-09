import type { Metadata } from "next"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import Link from "next/link"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "primera-consulta-proctologo")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "por-que-se-pospone", label: "Por qué la gente pospone esta consulta" },
  { id: "como-se-trata", label: "Qué pasa exactamente, paso a paso" },
  { id: "duele", label: "¿Duele?" },
  { id: "prepararte", label: "Cómo prepararte" },
  { id: "que-llevar", label: "Qué llevar" },
  { id: "te-preguntaran", label: "Qué te van a preguntar" },
  { id: "deberias-preguntar", label: "Qué deberías preguntar tú" },
  { id: "despues", label: "Qué pasa después de la consulta" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Puedo ir acompañado?",
    respuesta:
      "Sí. La persona que te acompaña permanece en el consultorio durante la entrevista y sale durante la exploración, salvo que prefieras lo contrario.",
  },
  {
    pregunta: "Soy mujer, ¿hay diferencia?",
    respuesta:
      "El procedimiento es el mismo. Se puede solicitar la presencia de personal de enfermería durante la exploración.",
  },
  {
    pregunta: "¿Me van a hacer colonoscopia el mismo día?",
    respuesta:
      "No. La colonoscopia requiere preparación previa y se programa aparte.",
  },
  {
    pregunta: "¿Y si tengo mucho dolor y no aguanto la exploración?",
    respuesta:
      "Se aplica anestésico tópico o se difiere la exploración. Primero se controla el dolor.",
  },
]

const pasos = [
  ["1. Conversación (10–15 minutos)", "Se hace sentado, vestido, frente al escritorio. Se revisa el síntoma, desde cuándo, cómo evoluciona, hábito intestinal, antecedentes personales y familiares, medicamentos."],
  ["2. Preparación para la exploración", "Se te pide pasar a la mesa de exploración. Te descubres únicamente la zona necesaria y se te cubre con una sábana. La posición habitual es de lado, con las rodillas flexionadas."],
  ["3. Inspección (30 segundos)", "Observación externa de la región perianal. Detecta hemorroides externas, fisuras, fístulas, abscesos y lesiones cutáneas."],
  ["4. Tacto rectal (menos de un minuto)", "Con guante y lubricante abundante. Evalúa tono del esfínter, dolor, masas palpables y, en hombres, próstata."],
  ["5. Anoscopía, si está indicada (1–2 minutos)", "Un instrumento tubular corto y lubricado que permite ver el canal anal por dentro. Es lo que confirma la presencia y el grado de hemorroides internas."],
  ["6. Diagnóstico y plan", "De regreso al escritorio, vestido. Se explica qué se encontró y qué se va a hacer."],
]

export default function Page() {
  return (
    <>
      <ArticleSchema
        titulo={post.title}
        descripcion={post.description}
        slug={post.slug}
        fechaPublicacion={post.dateISO}
        condicion="Exploración proctológica"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        tema="la primera consulta con el proctólogo"
        ctaTitle="No tienes que vivir con esto"
        ctaSubtitle="La consulta que llevas meses posponiendo dura menos de 30 minutos. La valoración es discreta y resuelve la mayoría de los casos sin cirugía."
        summary={
          <>
            Una consulta proctológica dura entre 20 y 30 minutos. Incluye historia clínica, inspección de la región anal, tacto rectal y, si se requiere, anoscopía. <strong>No necesitas preparación especial ni ayuno.</strong> El procedimiento es breve, se realiza con lubricante y anestésico tópico cuando hay dolor, y no requiere sedación.
          </>
        }
      >
        <div>
          <h2 id="por-que-se-pospone" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Por qué la gente pospone esta consulta
          </h2>
          <p className="text-gray-700">
            La proctología tiene un problema que no tienen otras especialidades: la vergüenza retrasa el diagnóstico.
          </p>
          <p className="text-gray-700 mt-3">
            El patrón es predecible. Aparece el síntoma. Se busca en internet. Se compra una pomada. Mejora un poco. Vuelve. Pasan meses. A veces años.
          </p>
          <p className="text-gray-700 mt-3">
            Ese retraso rara vez cambia el desenlace de una hemorroide. Sí lo cambia en un tumor.
          </p>
          <p className="text-gray-700 mt-3">
            Es el motivo por el que buena parte de los pacientes que llegan a una consulta de coloproctología en Puebla lo hacen después de meses de automedicarse. No por falta de información, sino por incomodidad con la idea de la exploración.
          </p>
          <p className="text-gray-700 mt-3">
            Vale la pena decirlo con claridad: <strong>para el especialista esta es una consulta rutinaria.</strong> Es lo que hace todos los días, varias veces al día. No hay nada que le vayas a mostrar que no haya visto.
          </p>
        </div>

        <TreatmentBlock titulo="Qué pasa exactamente, paso a paso">
          {pasos.map(([titulo, detalle]) => (
            <p key={titulo}>
              <strong>{titulo}.</strong> {detalle}
            </p>
          ))}
        </TreatmentBlock>

        <div>
          <h2 id="duele" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            ¿Duele?
          </h2>
          <p className="text-gray-700">
            En condiciones normales, <strong>no</strong>. Hay presión y sensación incómoda, pero no dolor.
          </p>
          <p className="text-gray-700 mt-3">
            Cuando ya existe dolor previo —una fisura aguda, por ejemplo— se aplica anestésico tópico antes de explorar, y si el dolor impide la exploración, se difiere: primero se trata el dolor, después se explora. Nunca se fuerza.
          </p>
        </div>

        <div>
          <h2 id="prepararte" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Cómo prepararte
          </h2>
          <ul className="space-y-2">
            {[
              "No necesitas ayuno.",
              "No necesitas enema ni laxante para una consulta de primera vez.",
              "Evacúa antes de venir, si puedes. Comodidad, no requisito.",
              "Higiene normal con agua. No uses toallitas ni jabones perfumados los días previos: pueden irritar y confundir el cuadro.",
              "Ropa cómoda.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id="que-llevar" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué llevar
          </h2>
          <ul className="space-y-2">
            {[
              "Lista de medicamentos que tomas, incluidos anticoagulantes",
              "Estudios previos: laboratorios, colonoscopias, ultrasonidos",
              "Antecedentes familiares de cáncer de colon o pólipos",
              "Datos de tu aseguradora, si aplica",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id="te-preguntaran" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué te van a preguntar
          </h2>
          <ul className="space-y-2">
            {[
              "¿Desde cuándo tienes el síntoma?",
              "¿Sangras? ¿De qué color? ¿Qué cantidad?",
              "¿Duele? ¿Antes, durante o después de evacuar?",
              "¿Cuántas veces evacúas por semana? ¿Pujas?",
              "¿Ha cambiado la forma de tus evacuaciones?",
              "¿Has perdido peso sin buscarlo?",
              "¿Alguien en tu familia ha tenido cáncer de colon o pólipos?",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id="deberias-preguntar" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué deberías preguntar tú
          </h2>
          <ul className="space-y-2">
            {[
              "¿Qué tengo exactamente y en qué grado está?",
              "¿Requiere cirugía o se puede manejar sin ella?",
              "Si requiere procedimiento, ¿qué técnica y por qué esa?",
              "¿Cuánto tiempo de recuperación implica?",
              "¿Qué pasa si no me trato?",
              "¿Necesito colonoscopia?",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id="despues" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué pasa después de la consulta
          </h2>
          <p className="text-gray-700">
            Sales con tres cosas: un diagnóstico, un plan y una idea clara de qué esperar. En la mayoría de las consultas de coloproctología en Puebla, ese plan no incluye cirugía.
          </p>
          <p className="text-gray-700 mt-3">
            Si lo encontrado explica por completo tu síntoma, el tratamiento empieza ese mismo día. Si no lo explica —por ejemplo, un sangrado que no corresponde a lo que se ve en la exploración— se solicita el estudio que corresponda antes de tratar nada. Ese orden importa: tratar el síntoma sin haber descartado la causa es lo que produce diagnósticos tardíos.
          </p>
          <p className="text-gray-700 mt-3">
            También sales sabiendo qué vigilar en casa y en qué momento volver. Si tu motivo de consulta fue el{" "}
            <Link href="/blog/sangrado-al-evacuar-causas" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              sangrado al evacuar
            </Link>
            , ahí encontrarás qué señales ameritan regresar antes de la cita de control.
          </p>
          <p className="text-gray-700 mt-3">
            Una última cosa que conviene decir: la consulta no compromete a nada. Puedes escuchar el diagnóstico, tomarte tu tiempo y decidir después. Lo que no conviene es seguir sin saber qué tienes.
          </p>
        </div>
      </BlogPostLayout>
    </>
  )
}
