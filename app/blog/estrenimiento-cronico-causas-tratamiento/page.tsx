import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "estrenimiento-cronico-causas-tratamiento")!

export const metadata: Metadata = {
  title: "Estreñimiento crónico: causas, tratamiento y cuándo consultar",
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

const laxatives = [
  ["Formadores de volumen", "Fibras como psyllium o metilcelulosa. Retienen agua y dan volumen a las heces. Requieren tomar suficiente agua.", "Suelen ser la primera opción"],
  ["Osmóticos", "Como el polietilenglicol o la lactulosa. Atraen agua al intestino y ablandan las heces.", "Útiles cuando la fibra no basta"],
  ["Estimulantes", "Como el bisacodilo o los senósidos. Aumentan los movimientos del intestino.", "Para uso ocasional o según indicación"],
  ["Ablandadores", "Ayudan a que el agua penetre en las heces.", "Efecto generalmente leve"],
]

const faqs = [
  {
    q: "¿Es normal no evacuar todos los días?",
    a: "Sí. El ritmo normal varía entre las personas: puede ir desde tres veces al día hasta tres veces por semana. Más que la frecuencia, importa si las heces son duras, si hay que pujar mucho o si queda la sensación de no haber terminado.",
  },
  {
    q: "¿Los laxantes hacen que el intestino se vuelva “flojo”?",
    a: "Los laxantes formadores de volumen y los osmóticos se consideran seguros para muchas personas cuando se usan con supervisión. Lo que no se recomienda es usar estimulantes de forma diaria y prolongada sin valoración, ni ocultar con laxantes un cambio en las evacuaciones que debería estudiarse.",
  },
  {
    q: "¿Cuánta fibra debo consumir?",
    a: "Una recomendación general para adultos es de 25 a 30 gramos al día, aumentándola poco a poco para evitar gases e inflamación, y acompañándola de suficiente agua.",
  },
  {
    q: "¿El estreñimiento puede causar hemorroides o fisuras?",
    a: "Sí. Pujar con fuerza y evacuar heces duras son factores importantes en la aparición de hemorroides y fisuras anales. Tratar el estreñimiento es parte esencial de su tratamiento y prevención.",
  },
  {
    q: "¿Cuándo el estreñimiento requiere una colonoscopia?",
    a: "Cuando aparece por primera vez después de los 45 a 50 años, cuando se acompaña de sangrado, anemia o pérdida de peso, cuando hay antecedentes familiares de cáncer colorrectal o cuando el cambio es reciente y persistente. El médico definirá si es necesaria.",
  },
  {
    q: "¿Cuándo debo consultar a un coloproctólogo en Puebla?",
    a: "Si el estreñimiento dura más de algunas semanas a pesar de los cambios en la dieta, si necesitas laxantes con frecuencia, si sientes que algo obstruye la salida de las heces o si tienes dolor, sangrado o signos de alarma.",
  },
]

const references = [
  ["National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). Constipation.", "https://www.niddk.nih.gov/health-information/digestive-diseases/constipation"],
  ["NIDDK. Treatment for Constipation.", "https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/treatment"],
  ["National Health Service (NHS). Constipation.", "https://www.nhs.uk/conditions/constipation/"],
  ["MedlinePlus en español. Estreñimiento.", "https://medlineplus.gov/spanish/constipation.html"],
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
        ctaTitle="Agenda una valoración por estreñimiento en Puebla"
        ctaSubtitle="Si el estreñimiento no mejora con cambios en la dieta o dependes de laxantes, una valoración especializada ayuda a encontrar la causa y un tratamiento a tu medida."
        reviewerNote="No uses laxantes estimulantes de forma diaria y prolongada sin valoración médica. Un cambio reciente y persistente en tus evacuaciones debe estudiarse."
        summary={
          <>
            El <strong>estreñimiento crónico</strong> se caracteriza por evacuaciones poco frecuentes, heces duras, esfuerzo excesivo o sensación de evacuación incompleta durante varias semanas o meses. La mayoría de los casos mejora con <strong>fibra, agua, actividad física y buenos hábitos en el baño</strong>, y algunos necesitan laxantes indicados por el médico. Si hay sangrado, pérdida de peso o un cambio reciente después de los 45 años, es importante una valoración.
          </>
        }
      >
        <div>
          <p className={p}>
            El estreñimiento es uno de los problemas digestivos más frecuentes y, aunque muchas veces se considera algo “normal”, puede afectar la calidad de vida y favorecer problemas como hemorroides y fisuras. La buena noticia es que, en la mayoría de los casos, se puede controlar con cambios sencillos y sostenidos.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué se considera estreñimiento</h2>
          <p className={p}>No se trata solo de cuántas veces vas al baño. Puedes tener estreñimiento si presentas, de forma frecuente:</p>
          <Bullets
            items={[
              "Menos de tres evacuaciones por semana.",
              "Heces duras, secas o en bolitas.",
              "Necesidad de pujar mucho para evacuar.",
              "Sensación de que no terminaste de evacuar.",
              "Sensación de bloqueo en la salida o necesidad de ayudarte con los dedos.",
            ]}
          />
          <p className={`${p} mt-4`}>Se considera crónico cuando estos síntomas persisten durante varias semanas o meses.</p>
        </div>

        <div>
          <h2 className={h2}>Causas más comunes</h2>
          <h3 className={h3}>Hábitos y estilo de vida</h3>
          <Bullets
            items={[
              "Dieta baja en fibra y poco consumo de agua.",
              "Poca actividad física.",
              "Aguantar las ganas de evacuar por trabajo, viajes o falta de privacidad.",
              "Cambios en la rutina, el horario o la alimentación.",
            ]}
          />
          <h3 className={h3}>Medicamentos</h3>
          <p className={p}>
            Algunos analgésicos opioides, suplementos de hierro o calcio, antiácidos con aluminio, ciertos antidepresivos y medicamentos para la presión, entre otros, pueden causar estreñimiento. No los suspendas sin consultar a tu médico.
          </p>
          <h3 className={h3}>Condiciones de salud</h3>
          <Bullets
            items={[
              "Síndrome de intestino irritable con predominio de estreñimiento.",
              "Hipotiroidismo, diabetes o enfermedades neurológicas.",
              "Embarazo.",
              "Disfunción del piso pélvico, en la que los músculos no se relajan de forma coordinada al evacuar.",
              "Con menor frecuencia, estrechamientos o tumores del colon.",
            ]}
          />
        </div>

        <div>
          <h2 className={h2}>Qué puedes hacer en casa</h2>
          <Bullets
            items={[
              <><strong>Aumenta la fibra poco a poco:</strong> frutas como papaya, ciruela o pera, verduras, leguminosas, avena y cereales integrales.</>,
              <><strong>Bebe suficiente agua:</strong> la fibra funciona mejor con buena hidratación.</>,
              <><strong>Muévete:</strong> caminar o hacer ejercicio con regularidad estimula el intestino.</>,
              <><strong>Respeta las ganas:</strong> acude al baño en cuanto sientas la necesidad.</>,
              <><strong>Crea una rutina:</strong> muchas personas evacúan con más facilidad después del desayuno.</>,
              <><strong>Cuida la postura:</strong> apoyar los pies en un banquito para elevar las rodillas puede facilitar la evacuación.</>,
              <><strong>No pases mucho tiempo sentado en el baño</strong> ni pujes con fuerza.</>,
            ]}
          />
        </div>

        <div>
          <h2 className={h2}>Laxantes: cuáles existen</h2>
          <p className={`${p} mb-4`}>
            Cuando los cambios en la dieta no son suficientes, el médico puede indicar un laxante. Cada tipo funciona de forma diferente:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-gray-900">
                <tr>
                  <th className="p-3 sm:p-4 font-bold">Tipo</th>
                  <th className="p-3 sm:p-4 font-bold">Cómo actúa</th>
                  <th className="p-3 sm:p-4 font-bold">Uso habitual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {laxatives.map(([type, how, use]) => (
                  <tr key={type}>
                    <td className="p-3 sm:p-4 font-medium text-gray-900 align-top">{type}</td>
                    <td className="p-3 sm:p-4 align-top">{how}</td>
                    <td className="p-3 sm:p-4 align-top">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Consulta a tu médico antes de usar laxantes de forma regular, sobre todo si estás embarazada, tienes enfermedad renal o cardiaca, o tomas otros medicamentos.
          </p>
        </div>

        <div>
          <h2 className={h2}>Estreñimiento y problemas anales</h2>
          <p className={p}>
            Pujar con fuerza y evacuar heces duras aumenta la presión en el canal anal. Por eso el estreñimiento se relaciona con hemorroides y fisuras. Si además del estreñimiento tienes dolor o sangrado al evacuar, te pueden interesar{" "}
            <Link href="/blog/fisura-anal-sintomas-tratamiento" className={link}>Fisura anal: síntomas, causas y tratamiento</Link> y{" "}
            <Link href="/blog/grados-de-hemorroides-tratamiento" className={link}>Grados de hemorroides y qué tratamiento necesita cada uno</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cómo se estudia el estreñimiento</h2>
          <p className={p}>
            La valoración inicia con preguntas sobre tus hábitos, medicamentos y síntomas, y una exploración que puede incluir tacto rectal. Según el caso, pueden indicarse análisis de sangre, una colonoscopia o estudios del funcionamiento del piso pélvico y del tránsito intestinal. Si tu ritmo intestinal cambió recientemente, revisa{" "}
            <Link href="/blog/cambios-en-las-evacuaciones-cuando-preocuparse" className={link}>Cambios en las evacuaciones: cuándo preocuparse</Link>.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Consulta pronto si el estreñimiento se acompaña de:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Sangre en las heces o anemia",
              "Pérdida de peso sin explicación",
              "Un cambio reciente y persistente, sobre todo después de los 45 años",
              "Dolor abdominal intenso, vómito o abdomen muy inflamado",
              "No poder expulsar gases ni heces",
              "Antecedentes familiares de cáncer colorrectal",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">{item}</p></div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            El dolor abdominal intenso con vómito y sin poder expulsar gases puede indicar una obstrucción intestinal y requiere atención urgente.
          </p>
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
