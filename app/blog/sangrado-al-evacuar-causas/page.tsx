import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "sangrado-al-evacuar-causas")!

export const metadata: Metadata = {
  title: "Sangrado al evacuar: causas y cuándo preocuparse",
  description: post.description,
}

const toc: TocItem[] = [
  { id: "color", label: "Qué te dice el color de la sangre" },
  { id: "causas", label: "Las 7 causas más frecuentes" },
  { id: "dolor", label: "Con dolor o sin dolor: el dato que más orienta" },
  { id: "cuando-acudir", label: "Señales de alarma" },
  { id: "como-se-trata", label: "Cómo se estudia un sangrado anal" },
  { id: "que-hacer", label: "Qué hacer hoy" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "Sangré una sola vez y ya no volvió. ¿Debo revisarme?",
    respuesta:
      "Sí, sobre todo si es el primer episodio o tienes más de 45 años. Un sangrado que cede no descarta la causa.",
  },
  {
    pregunta: "¿Puede ser por el esfuerzo o por comer picante?",
    respuesta:
      "El esfuerzo al evacuar sí puede desencadenar sangrado hemorroidal. El picante irrita, pero no causa el sangrado por sí solo.",
  },
  {
    pregunta: "¿Es normal sangrar durante el embarazo?",
    respuesta:
      "Es frecuente por la presión pélvica y el estreñimiento, pero frecuente no es igual a normal. Debe valorarse igual.",
  },
  {
    pregunta: "¿La colonoscopia duele?",
    respuesta:
      "Se realiza bajo sedación. El paciente no percibe el procedimiento. La molestia real está en la preparación previa, no en el estudio.",
  },
  {
    pregunta: "¿Cuánto tarda la consulta?",
    respuesta: "Menos de 30 minutos, incluida la exploración.",
  },
]

const causas = [
  ["Hemorroides internas", "Sangrado rojo brillante, indoloro, al final de la evacuación. La causa número uno."],
  ["Fisura anal", "Sangrado escaso acompañado de dolor intenso tipo cortada, que persiste minutos u horas después de evacuar."],
  ["Pólipos colorrectales", "Suelen ser silenciosos. Cuando sangran, la sangre puede aparecer mezclada. Son lesiones precursoras de cáncer y por eso se extirpan."],
  ["Cáncer colorrectal", "Puede presentarse con sangrado, cambio del calibre de las heces, sensación de evacuación incompleta o anemia. Es la razón por la que el sangrado nunca se asume."],
  ["Enfermedad inflamatoria intestinal", "Colitis ulcerosa y enfermedad de Crohn. Sangrado con moco, diarrea, dolor abdominal y afectación del estado general."],
  ["Divertículos", "Sangrado abundante, súbito, indoloro, más frecuente después de los 60 años."],
  ["Proctitis", "Inflamación del recto por infección, radioterapia u otras causas. Sangrado con urgencia y pujo."],
]

export default function Page() {
  return (
    <>
      <ArticleSchema
        titulo={post.title}
        descripcion={post.description}
        slug={post.slug}
        fechaPublicacion="2026-07-08"
        fechaModificacion={post.dateISO}
        condicion="Sangrado rectal"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        tema="sangrado al evacuar"
        ctaTitle="No tienes que vivir con esto"
        ctaSubtitle="La mayoría de los sangrados anales tienen causa benigna, pero el diagnóstico se hace en consultorio, no por suposición. La valoración es discreta y toma menos de 30 minutos."
        reviewerNote="El sangrado rectal siempre debe evaluarse por un profesional."
        summary={
          <>
            La causa más frecuente de sangrado al evacuar son las hemorroides internas y la fisura anal, ambas benignas. Sin embargo, el color, la cantidad y la relación con el dolor cambian el diagnóstico por completo. <strong>La sangre oscura o mezclada con las heces, el cambio del hábito intestinal o la edad mayor a 45 años obligan a descartar causas de colon.</strong>
          </>
        }
      >
        <div>
          <h2 id="color" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué te dice el color de la sangre
          </h2>
          <p className="text-gray-700 mb-4">
            El color indica distancia. Mientras más arriba en el tubo digestivo esté el origen, más oscura llega la sangre.
          </p>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Rojo brillante, gotea o mancha el papel</h3>
              <p className="text-gray-700">Origen bajo: canal anal o recto. Típico de hemorroides internas y fisura.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Rojo oscuro o vinoso, mezclada con la materia fecal</h3>
              <p className="text-gray-700">Origen más alto: colon. Requiere estudio.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Negra, pegajosa, con olor fuerte (melena)</h3>
              <p className="text-gray-700">
                Sangrado digestivo alto. <strong>Es una urgencia médica. Acude a un servicio de urgencias.</strong>
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Sangre oculta, sin verla</h3>
              <p className="text-gray-700">
                Se detecta por estudio de laboratorio o por anemia inexplicable. Es la forma en que se manifiestan muchos tumores derechos de colon.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="causas" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Las causas más frecuentes de sangrado anal
          </h2>
          <div className="space-y-3">
            {causas.map(([titulo, detalle], i) => (
              <div key={titulo} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
                  {i + 1}. {titulo}
                </h3>
                <p className="text-gray-700">{detalle}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4">
            Si tu caso apunta a la causa más común, la guía completa sobre{" "}
            <Link href="/blog/hemorroides-guia-completa" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              hemorroides
            </Link>{" "}
            explica cómo se clasifican por grados y qué tratamiento corresponde a cada uno.
          </p>
        </div>

        <div>
          <h2 id="dolor" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Con dolor o sin dolor: el dato que más orienta
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left font-bold text-gray-900 p-3 rounded-tl-lg">Cuadro</th>
                  <th className="text-left font-bold text-gray-900 p-3 rounded-tr-lg">Orientación probable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Sangre roja sin dolor", "Hemorroides internas"],
                  ["Sangre roja con dolor intenso al evacuar", "Fisura anal"],
                  ["Sangre con dolor abdominal y diarrea", "Enfermedad inflamatoria o infecciosa"],
                  ["Sangre mezclada, sin dolor, con cambio de hábito", "Requiere colonoscopia"],
                  ["Sangre con bulto doloroso en el borde anal", "Hemorroide externa trombosada"],
                ].map(([cuadro, orientacion]) => (
                  <tr key={cuadro} className="border-b border-gray-200">
                    <td className="p-3 text-gray-700 align-top">{cuadro}</td>
                    <td className="p-3 text-gray-700 align-top">{orientacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4">
            Esta tabla orienta. No diagnostica. La exploración proctológica es la que define.
          </p>
        </div>

        <RedFlags
          titulo="Señales de alarma: no esperes"
          intro="Acude a valoración sin postergar si el sangrado se acompaña de:"
          senales={[
            "Edad mayor a 45 años y primer episodio",
            "Antecedente familiar de cáncer de colon o pólipos",
            "Pérdida de peso involuntaria",
            "Cansancio, palidez o anemia diagnosticada",
            "Heces delgadas o en forma de listón",
            "Cambio en el hábito intestinal de más de tres semanas",
            "Sensación de no vaciar completamente el recto",
            "Sangrado que aumenta en cantidad o frecuencia",
          ]}
        />

        <TreatmentBlock titulo="Cómo se estudia un sangrado anal">
          <p>La valoración sigue una secuencia clara:</p>
          <p>
            <strong>1. Historia clínica dirigida.</strong> Color, cantidad, relación con el dolor, tiempo de evolución, antecedentes familiares.
          </p>
          <p>
            <strong>2. Exploración proctológica.</strong> Inspección, tacto rectal y anoscopía. Se realiza en consultorio, dura pocos minutos y resuelve la mayoría de los diagnósticos benignos.
          </p>
          <p>
            <strong>3. Colonoscopia</strong>, cuando hay señales de alarma, edad de tamizaje o el sangrado no se explica con lo encontrado.
          </p>
          <p>
            El objetivo de la consulta no es solo tratar el síntoma. Es <strong>descartar lo grave primero</strong>.
          </p>
        </TreatmentBlock>

        <div>
          <h2 id="que-hacer" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué hacer hoy
          </h2>
          <ul className="space-y-2">
            {[
              "No te automediques con pomadas antes de tener diagnóstico. Enmascaran el síntoma sin resolver la causa.",
              "Registra: color, frecuencia, si duele, desde cuándo. Ese dato ahorra tiempo en consulta.",
              "Aumenta fibra e hidratación mientras acudes a valoración.",
              "Deja de pujar y de pasar tiempo sentado en el inodoro.",
              "Agenda la valoración. El sangrado anal no se estudia por teléfono.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </BlogPostLayout>
    </>
  )
}
