import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "quiste-pilonidal-sintomas-tratamiento")!

export const metadata: Metadata = {
  title: "Quiste pilonidal: síntomas, causas y tratamiento",
  description: post.description,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: post.title,
  description: post.description,
  datePublished: post.dateISO,
  dateModified: post.dateISO,
  author: {
    "@type": "Physician",
    name: "Dr. José Manuel Fernández Rivero",
    identifier: "Cédula profesional 2914327 / Especialidad 4743089",
    medicalSpecialty: "Coloproctología",
  },
  reviewedBy: {
    "@type": "Physician",
    name: "Dr. José Manuel Fernández Rivero",
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. José Manuel Fernández Rivero - Coloproctólogo",
    address: "Av 23 Pte 4303, Belisario Domínguez, 72180 Puebla, México",
  },
}

const h2 = "text-xl sm:text-2xl font-bold text-gray-900 mb-3"
const h3 = "font-bold text-gray-900 text-base sm:text-lg mt-6 mb-2"
const p = "text-gray-700 leading-relaxed text-sm sm:text-base"
const link = "text-green-700 font-medium underline underline-offset-2 hover:text-green-800"

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
          <span className="text-green-600 mt-0.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const riskFactors = [
  ["Ser hombre joven", "Es más frecuente entre la pubertad y los 40 años, y más en hombres que en mujeres."],
  ["Vello abundante o grueso", "El vello de la zona puede introducirse en la piel del pliegue entre los glúteos."],
  ["Pasar muchas horas sentado", "La presión y la fricción constantes favorecen que el vello penetre en la piel."],
  ["Sobrepeso", "Un pliegue entre los glúteos más profundo retiene humedad, sudor y vello."],
  ["Antecedentes familiares", "Algunas personas tienen un pliegue más profundo o un tipo de vello que aumenta el riesgo."],
]

const treatments = [
  ["Drenaje del absceso", "Cuando el quiste está infectado y con pus, se abre y se drena con anestesia local. Alivia el dolor de inmediato, pero no siempre elimina la enfermedad, por lo que puede requerirse un segundo tratamiento."],
  ["Técnicas mínimamente invasivas", "En casos seleccionados se pueden limpiar los orificios y el trayecto con incisiones pequeñas, con menos dolor y un regreso más rápido a las actividades."],
  ["Resección con cierre fuera de la línea media", "Se retira el tejido enfermo y se cierra la herida desplazándola a un lado del pliegue (por ejemplo, técnicas de colgajo). Suele lograr una cicatrización más rápida y menos recurrencias que dejar la herida en la línea media."],
  ["Resección con herida abierta", "Se retira el tejido y la herida cierra poco a poco desde el fondo. Requiere curaciones durante varias semanas, pero puede ser una opción en enfermedad extensa o infectada."],
]

const faqs = [
  {
    q: "¿El quiste pilonidal se quita solo?",
    a: "Puede desinflamarse y dejar de doler por temporadas, pero el trayecto bajo la piel suele permanecer y es común que vuelva a infectarse. Los antibióticos por sí solos rara vez lo curan. Si ya tuviste más de un episodio, conviene valorar un tratamiento definitivo.",
  },
  {
    q: "¿Puedo reventarlo o drenarlo en casa?",
    a: "No es recomendable. Exprimirlo puede empujar la infección más profundo, aumentar el dolor y causar más daño a la piel. Si hay un bulto doloroso, caliente o con pus, lo indicado es una valoración médica para drenarlo de forma limpia y segura.",
  },
  {
    q: "¿Cuánto tiempo tarda la recuperación de la cirugía?",
    a: "Depende de la técnica. Con métodos mínimamente invasivos o con cierre de la herida, muchas personas regresan a actividades de escritorio en pocos días. Cuando la herida se deja abierta, la cicatrización completa puede tardar varias semanas con curaciones. En consulta se elige la opción más adecuada para cada caso.",
  },
  {
    q: "¿Puede regresar después de operarse?",
    a: "Sí, existe un riesgo de recurrencia que varía según la técnica y los cuidados posteriores. Mantener la zona limpia y seca, y retirar el vello del área (por ejemplo, con depilación láser) ayuda a reducir el riesgo.",
  },
  {
    q: "¿Qué médico trata el quiste pilonidal en Puebla?",
    a: "Lo puede tratar un cirujano general o un coloproctólogo con experiencia en enfermedad pilonidal. El coloproctólogo trata con frecuencia problemas de esta zona y puede diferenciarlo de otras lesiones, como una fístula anal o un absceso perianal.",
  },
]

const references = [
  ["American Society of Colon and Rectal Surgeons (ASCRS). Pilonidal Disease.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Pilonidal-Disease.aspx"],
  ["National Health Service (NHS). Pilonidal sinus.", "https://www.nhs.uk/conditions/pilonidal-sinus/"],
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        ctaTitle="¿Bulto o dolor en el coxis? Agenda una valoración en Puebla"
        ctaSubtitle="Un quiste pilonidal tratado a tiempo evita infecciones repetidas. En consulta revisamos la zona y te explicamos la opción de tratamiento más adecuada para ti."
        reviewerNote="Este artículo es informativo. Si tienes un bulto doloroso con fiebre, enrojecimiento que se extiende o salida de pus, busca atención médica pronto."
        summary={
          <>
            El <strong>quiste pilonidal</strong> (enfermedad pilonidal) es una cavidad o trayecto bajo la piel en el <strong>pliegue entre los glúteos, cerca del coxis</strong>, que suele contener vello y restos de piel. Puede no dar molestias, pero cuando se infecta forma un absceso doloroso. El drenaje alivia la infección aguda; para evitar que regrese, a menudo se necesita un <strong>tratamiento quirúrgico</strong> definitivo.
          </>
        }
      >
        <div>
          <p className={p}>
            Muchas personas lo descubren de repente: un bulto doloroso en la parte alta del pliegue entre los glúteos que hace difícil sentarse. Otras llevan meses o años con pequeños orificios en la piel que a veces supuran. Aunque no es una enfermedad grave, sí puede ser muy molesta y tiende a repetirse si no se trata de forma adecuada.
          </p>
        </div>

        <div>
          <h2 className={h2}>¿Qué es y por qué aparece?</h2>
          <p className={p}>
            Hoy se sabe que la mayoría de los quistes pilonidales no son de nacimiento, sino que se forman cuando el <strong>vello se introduce en la piel</strong> del pliegue entre los glúteos. La fricción, el sudor y la presión al estar sentado empujan el vello hacia adentro; el cuerpo lo reconoce como un cuerpo extraño y se forma una cavidad que puede inflamarse e infectarse.
          </p>
          <h3 className={h3}>Factores que aumentan el riesgo</h3>
          <div className="space-y-3 mt-4">
            {riskFactors.map(([title, description]) => (
              <div key={title} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={h2}>Síntomas</h2>
          <p className={p}>Los síntomas varían según si el quiste está tranquilo o infectado:</p>
          <Bullets
            items={[
              "Uno o varios orificios pequeños en la línea media del pliegue entre los glúteos, a veces con vello saliendo de ellos.",
              "Dolor e hinchazón en la zona del coxis, que empeora al sentarse.",
              "Un bulto rojo, caliente y sensible (absceso).",
              "Salida de pus o líquido con mal olor, a veces con un poco de sangre.",
              "En infecciones más intensas, fiebre y malestar general.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Es importante diferenciarlo de un absceso perianal o una fístula anal, que se originan en el ano y tienen un tratamiento distinto. Si quieres conocer esas condiciones, lee{" "}
            <Link href="/blog/fistula-anal-absceso-perianal" className={link}>Fístula anal y absceso perianal: síntomas, diferencias y tratamiento</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Diagnóstico</h2>
          <p className={p}>
            En la mayoría de los casos el diagnóstico se hace en la consulta, con la historia de los síntomas y la revisión de la zona. Rara vez se necesitan estudios de imagen, que pueden indicarse cuando la enfermedad es extensa, ha recurrido o hay dudas sobre si existe relación con el ano.
          </p>
        </div>

        <div>
          <h2 className={h2}>Opciones de tratamiento</h2>
          <p className={p}>
            Si el quiste no da molestias, puede bastar con vigilarlo y mantener la zona limpia y sin vello. Cuando causa infecciones o supuración, el tratamiento depende de la etapa:
          </p>
          <div className="space-y-3 mt-4">
            {treatments.map(([title, description]) => (
              <div key={title} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className={`${p} mt-4`}>
            No existe una técnica única que sea la mejor para todos. La elección depende del tamaño del quiste, si hubo cirugías previas, la profundidad del pliegue y las necesidades de cada paciente para regresar al trabajo o la escuela.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cuidados para evitar que regrese</h2>
          <Bullets
            items={[
              "Mantén la zona limpia y seca, sobre todo después de hacer ejercicio o sudar.",
              "Retira el vello del área de forma regular; la depilación láser es una opción útil a largo plazo.",
              "Si trabajas o estudias muchas horas sentado, haz pausas para levantarte y caminar.",
              "Mantén un peso saludable.",
              "Acude a tus revisiones después de la cirugía para vigilar la cicatrización.",
            ]}
          />
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Busca atención pronto si tienes:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Un bulto muy doloroso que crece rápido",
              "Fiebre o escalofríos",
              "Enrojecimiento que se extiende por la piel",
              "Salida de pus con mal olor",
              "Infecciones que se repiten en la misma zona",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">{item}</p></div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={`${h2} mb-4`}>Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{faq.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Referencias</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
            {references.map(([label, href]) => (
              <li key={href}>
                {label}{" "}
                <a href={href} target="_blank" rel="noopener noreferrer" className={link}>Consultar fuente</a>
              </li>
            ))}
          </ol>
        </div>
      </BlogPostLayout>
    </>
  )
}
