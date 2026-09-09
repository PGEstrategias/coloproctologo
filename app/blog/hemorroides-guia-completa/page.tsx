import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "hemorroides-guia-completa")!

export const metadata: Metadata = {
  title: "Hemorroides: síntomas, grados y tratamiento",
  description: post.description,
}

const toc: TocItem[] = [
  { id: "que-son", label: "Qué son realmente las hemorroides" },
  { id: "internas-externas", label: "Internas y externas: no son lo mismo" },
  { id: "grados", label: "Los cuatro grados" },
  { id: "sintomas", label: "Síntomas que sí corresponden a hemorroides" },
  { id: "no-son-hemorroides", label: "Síntomas que NO son hemorroides" },
  { id: "causas", label: "Qué las provoca" },
  { id: "como-se-trata", label: "Tratamiento según el grado" },
  { id: "cuando-acudir", label: "Cuándo acudir al proctólogo" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Las hemorroides se quitan solas?",
    respuesta:
      "Un episodio agudo puede ceder solo, pero la hemorroide dilatada no revierte por sí misma. Sin corregir la causa, los episodios se repiten y el grado avanza.",
  },
  {
    pregunta: "¿Duele la exploración proctológica?",
    respuesta:
      "No. La exploración es breve y se realiza con anestésico tópico cuando hay dolor previo. El miedo a la consulta retrasa más diagnósticos que cualquier otra causa.",
  },
  {
    pregunta: "¿Las hemorroides se convierten en cáncer?",
    respuesta:
      "No. Las hemorroides no evolucionan a cáncer. El riesgo es distinto: que un cáncer se confunda con hemorroides y se retrase el diagnóstico.",
  },
  {
    pregunta: "¿Puedo operarme y que vuelvan?",
    respuesta:
      "Puede haber recurrencia si persisten los factores que las causaron, principalmente el estreñimiento y el pujo. Por eso el tratamiento incluye cambios de hábito, no solo el procedimiento.",
  },
  {
    pregunta: "¿Cuánto tiempo de incapacidad requiere la cirugía?",
    respuesta:
      "Depende de la técnica empleada y del trabajo del paciente. Se define en la valoración preoperatoria.",
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
        condicion="Enfermedad hemorroidal"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        tema="hemorroides"
        ctaTitle="No tienes que vivir con esto"
        ctaSubtitle="La mayoría de los casos de enfermedad hemorroidal se resuelven sin cirugía cuando se atienden a tiempo. La valoración es discreta y toma menos de 30 minutos."
        reviewerNote="El sangrado anal nunca debe asumirse como hemorroides sin valoración."
        summary={
          <>
            Las hemorroides son venas dilatadas en el recto y el ano. Casi todo adulto las tiene; se vuelven un problema cuando sangran, duelen o se salen. El tratamiento depende del grado: los grados I y II suelen resolverse sin cirugía, y los grados III y IV requieren un procedimiento. <strong>El sangrado nunca debe asumirse como hemorroides sin valoración médica.</strong>
          </>
        }
      >
        <div>
          <h2 id="que-son" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué son realmente las hemorroides
          </h2>
          <p className="text-gray-700">
            Las hemorroides no son una enfermedad que aparece. Son estructuras normales: cojinetes de tejido vascular que todos tenemos en el canal anal y que ayudan al control de la continencia.
          </p>
          <p className="text-gray-700 mt-3">
            El problema empieza cuando esos cojinetes se inflaman, se dilatan o se desplazan. A eso se le llama <strong>enfermedad hemorroidal</strong>, y es el motivo de consulta más frecuente en coloproctología.
          </p>
          <p className="text-gray-700 mt-3">
            Que sea frecuente no significa que sea inofensivo. Significa que es tratable.
          </p>
        </div>

        <div>
          <h2 id="internas-externas" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Hemorroides internas y externas: no son lo mismo
          </h2>
          <p className="text-gray-700 mb-4">
            La diferencia está en la línea dentada, un límite anatómico dentro del canal anal que separa dos zonas con inervación distinta.
          </p>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Hemorroides internas</h3>
              <p className="text-gray-700">
                Están por arriba de esa línea, en tejido sin terminaciones nerviosas de dolor. Por eso <strong>no duelen</strong>. Su síntoma característico es el sangrado rojo brillante, sin dolor, al final de la evacuación.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Hemorroides externas</h3>
              <p className="text-gray-700">
                Están por debajo, en piel con inervación completa. <strong>Sí duelen.</strong> Se perciben como una bolita en el borde del ano, dura y sensible, sobre todo si se trombosa.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Un paciente puede tener ambas al mismo tiempo. Es lo más común.
          </p>
        </div>

        <div>
          <h2 id="grados" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Los cuatro grados de la hemorroide interna
          </h2>
          <p className="text-gray-700 mb-4">
            La clasificación por grados es lo que define el tratamiento. No el dolor, no el tiempo con el síntoma: el grado.
          </p>
          <div className="space-y-3">
            {[
              { g: "Grado I", d: "La hemorroide sangra pero no se sale del canal anal. Solo se ve por anoscopía." },
              { g: "Grado II", d: "Se sale al pujar y regresa sola al terminar de evacuar." },
              { g: "Grado III", d: "Se sale al pujar y hay que empujarla con la mano para regresarla." },
              { g: "Grado IV", d: "Está permanentemente fuera y no se puede reintroducir. Riesgo de trombosis y estrangulamiento." },
            ].map((item) => (
              <div key={item.g} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{item.g}</h3>
                <p className="text-gray-700">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4">
            Esta escala es la razón por la que dos personas con &ldquo;hemorroides&rdquo; reciben tratamientos completamente distintos. Un grado I se maneja con dieta y un procedimiento de consultorio de 10 minutos. Un grado IV requiere quirófano.
          </p>
        </div>

        <div>
          <h2 id="sintomas" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Síntomas que corresponden a enfermedad hemorroidal
          </h2>
          <ul className="space-y-2">
            {[
              "Sangrado rojo brillante que gotea o mancha el papel, sin dolor",
              "Sensación de bulto o cuerpo extraño en el ano",
              "Comezón o irritación en la piel perianal",
              "Salida de tejido al evacuar",
              "Dolor agudo y bulto duro (sugiere trombosis de hemorroide externa)",
              "Manchado de moco en la ropa interior",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id="no-son-hemorroides" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Síntomas que NO son hemorroides
          </h2>
          <p className="text-gray-700 mb-3">Este es el bloque más importante del artículo.</p>
          <p className="text-gray-700 mb-4">
            El error clínico más caro en proctología es asumir que todo sangrado anal es hemorroidal. <strong>No lo es.</strong> Y el retraso diagnóstico en cáncer colorrectal ocurre, en buena parte, porque el paciente se autodiagnosticó hemorroides durante meses.
          </p>
          <p className="text-gray-700 mb-4">Estas señales exigen valoración, no pomada:</p>
          <ul className="space-y-2 mb-4">
            {[
              "Sangre oscura o mezclada con la materia fecal",
              "Cambio en el calibre de las evacuaciones (heces delgadas, tipo listón)",
              "Cambio en el hábito intestinal que dura más de tres semanas",
              "Pérdida de peso sin explicación",
              "Anemia o cansancio persistente",
              "Sangrado en una persona mayor de 45 años sin diagnóstico previo",
              "Antecedente familiar de cáncer de colon o pólipos",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            Ninguna de esas señales significa cáncer automáticamente. Significan que hace falta descartar. Si tu síntoma principal es el sangrado, revisa nuestra guía sobre{" "}
            <Link href="/blog/sangrado-al-evacuar-causas" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              sangrado al evacuar
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 id="causas" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué provoca la enfermedad hemorroidal
          </h2>
          <ul className="space-y-2">
            {[
              ["Estreñimiento y pujo prolongado.", "El factor número uno."],
              ["Tiempo sentado en el inodoro.", "El celular en el baño es un factor de riesgo real: más de 3 minutos sentado aumenta la congestión venosa."],
              ["Dieta baja en fibra.", ""],
              ["Embarazo y parto.", "Presión pélvica más cambios hormonales."],
              ["Sedentarismo o, al revés, levantamiento pesado repetido.", ""],
              ["Diarrea crónica.", ""],
              ["Predisposición familiar.", ""],
            ].map(([titulo, detalle]) => (
              <li key={titulo} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>
                  <strong>{titulo}</strong>
                  {detalle ? ` ${detalle}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <TreatmentBlock titulo="Tratamiento según el grado">
          <p>
            <strong>Grados I y II — manejo conservador y procedimientos de consultorio.</strong> Ajuste de fibra e hidratación, reeducación del hábito evacuatorio, tratamiento tópico y, cuando está indicado, ligadura con banda elástica: un procedimiento ambulatorio, sin anestesia general, que se realiza en consultorio en pocos minutos.
          </p>
          <p>
            <strong>Grado III — según el caso.</strong> Puede responder a ligadura en varias sesiones o requerir cirugía. Se decide con la exploración, no por teléfono.
          </p>
          <p>
            <strong>Grado IV — quirúrgico.</strong> Requiere resolución en quirófano. La técnica se elige en la valoración, según el caso.
          </p>
          <p>
            <strong>En todos los casos:</strong> el objetivo no es &ldquo;quitar las hemorroides&rdquo;. Es corregir la causa que las está congestionando. Si no se corrige el estreñimiento, vuelven.
          </p>
        </TreatmentBlock>

        <RedFlags
          titulo="Cuándo acudir al proctólogo en Puebla"
          intro="Acude sin esperar si presentas:"
          senales={[
            "Sangrado por primera vez, a cualquier edad",
            "Sangrado que persiste más de una semana",
            "Dolor anal intenso que impide sentarte",
            "Bulto duro y doloroso de aparición súbita",
            "Fiebre junto con dolor anal (posible absceso)",
            "Cualquiera de las señales de alarma del apartado anterior",
          ]}
        />
      </BlogPostLayout>
    </>
  )
}
