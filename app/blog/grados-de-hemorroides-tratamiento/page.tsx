import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "grados-de-hemorroides-tratamiento")!

export const metadata: Metadata = {
  title: "Grados de hemorroides y qué tratamiento necesita cada uno",
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

const grades = [
  ["Grado I", "Sangran, pero no salen del ano", "Dieta con fibra, hidratación, hábitos de evacuación y, en algunos casos, medicamentos"],
  ["Grado II", "Salen al pujar y regresan solas", "Medidas generales; ligadura con banda u otros procedimientos en consultorio si persisten los síntomas"],
  ["Grado III", "Salen al pujar y hay que regresarlas con el dedo", "Ligadura con banda en casos seleccionados; con frecuencia se valora cirugía"],
  ["Grado IV", "Permanecen afuera y no se pueden regresar", "Generalmente se valora cirugía (hemorroidectomía)"],
]

const faqs = [
  {
    q: "¿Las hemorroides desaparecen solas?",
    a: "Los síntomas de muchas hemorroides leves mejoran con cambios en la dieta y en los hábitos de evacuación. Sin embargo, los cojinetes hemorroidales son parte normal de la anatomía, por lo que no “desaparecen”; lo que se busca es controlar la inflamación, el sangrado y el prolapso.",
  },
  {
    q: "¿Todas las hemorroides se operan?",
    a: "No. La mayoría de las personas con hemorroides no necesita cirugía. La hemorroidectomía se reserva generalmente para hemorroides de grado III o IV, hemorroides mixtas grandes o cuando otros tratamientos no han funcionado.",
  },
  {
    q: "¿Qué es una hemorroide trombosada?",
    a: "Es una hemorroide externa en la que se formó un coágulo. Aparece como una bolita dura, morada y muy dolorosa. Si se atiende en los primeros días, el médico puede valorar retirar el coágulo; después, el dolor suele disminuir gradualmente con tratamiento conservador.",
  },
  {
    q: "¿Las pomadas curan las hemorroides?",
    a: "Las pomadas pueden aliviar el dolor, la comezón y la inflamación, pero no corrigen el prolapso. Las que contienen corticoides no deben usarse por periodos prolongados sin supervisión porque pueden adelgazar la piel.",
  },
  {
    q: "¿Cuánto duele la cirugía de hemorroides?",
    a: "Depende de la técnica y de cada paciente. Hoy existen esquemas de control del dolor que hacen la recuperación más llevadera. Lo explicamos con detalle en el artículo sobre el dolor después de la cirugía de hemorroides.",
  },
  {
    q: "¿Puedo saber en casa qué grado de hemorroides tengo?",
    a: "Puedes notar si algo sale al pujar o si sangras, pero el grado y el tipo (internas, externas o mixtas) se determinan con una exploración. Además, otros problemas como fisuras, pólipos o tumores pueden producir síntomas parecidos.",
  },
]

const references = [
  ["American Society of Colon and Rectal Surgeons (ASCRS). Hemorrhoids.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Hemorrhoids.aspx"],
  ["National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). Hemorrhoids.", "https://www.niddk.nih.gov/health-information/digestive-diseases/hemorrhoids"],
  ["National Health Service (NHS). Piles (haemorrhoids).", "https://www.nhs.uk/conditions/piles-haemorrhoids/"],
  ["MedlinePlus en español. Hemorroides.", "https://medlineplus.gov/spanish/hemorrhoids.html"],
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
        ctaTitle="Agenda tu valoración de hemorroides en Puebla"
        ctaSubtitle="En consulta se determina el tipo y el grado de tus hemorroides para elegir el tratamiento más sencillo y efectivo para tu caso, con o sin cirugía."
        reviewerNote="Este artículo es informativo. El grado de las hemorroides y el tratamiento adecuado se definen con una exploración médica."
        summary={
          <>
            Las <strong>hemorroides internas</strong> se clasifican en <strong>cuatro grados</strong> según cuánto salen del ano. Los grados I y II suelen tratarse con dieta, hábitos de evacuación, medicamentos o procedimientos en consultorio como la ligadura con banda. Los grados III y IV, o las hemorroides que no mejoran, pueden requerir cirugía. Conocer el grado ayuda a elegir el tratamiento, pero solo una exploración puede confirmarlo.
          </>
        }
      >
        <div>
          <p className={p}>
            “Doctor, ¿mis hemorroides se operan?” Es una de las preguntas más frecuentes en consulta, y la respuesta casi siempre es: depende del grado. Muchas personas viven años con molestias por miedo a una cirugía que, en realidad, quizá no necesitan. Aquí explicamos cómo se clasifican las hemorroides y qué opciones existen en cada etapa.
          </p>
        </div>

        <div>
          <h2 className={h2}>Hemorroides internas, externas y mixtas</h2>
          <p className={p}>
            Las hemorroides son cojinetes de venas que todos tenemos en el canal anal. Se convierten en un problema cuando se inflaman, sangran o se desplazan hacia afuera.
          </p>
          <Bullets
            items={[
              <><strong>Internas:</strong> se forman dentro del canal anal. Generalmente no duelen, pero pueden sangrar y salir al pujar (prolapso).</>,
              <><strong>Externas:</strong> se localizan bajo la piel alrededor del ano. Pueden causar comezón, molestia y dolor intenso si se forma un coágulo (trombosis).</>,
              <><strong>Mixtas:</strong> combinan un componente interno y otro externo.</>,
            ]}
          />
          <p className={`${p} mt-4`}>La clasificación por grados se aplica a las hemorroides internas.</p>
        </div>

        <div>
          <h2 className={h2}>Los 4 grados de hemorroides internas</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mt-4">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-gray-900">
                <tr>
                  <th className="p-3 sm:p-4 font-bold">Grado</th>
                  <th className="p-3 sm:p-4 font-bold">Qué sucede</th>
                  <th className="p-3 sm:p-4 font-bold">Tratamientos habituales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {grades.map(([grade, description, treatment]) => (
                  <tr key={grade}>
                    <td className="p-3 sm:p-4 font-medium text-gray-900 align-top whitespace-nowrap">{grade}</td>
                    <td className="p-3 sm:p-4 align-top">{description}</td>
                    <td className="p-3 sm:p-4 align-top">{treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            La tabla es orientativa. El tratamiento también depende de los síntomas, del tamaño de las hemorroides, de si son mixtas y de las condiciones de salud de cada persona.
          </p>
        </div>

        <div>
          <h2 className={h2}>Síntomas que suelen aparecer</h2>
          <Bullets
            items={[
              "Sangre roja brillante en el papel, en el inodoro o sobre las heces.",
              "Una bolita blanda que sale al pujar.",
              "Comezón, humedad o irritación alrededor del ano.",
              "Sensación de evacuación incompleta o de presión.",
              "Dolor intenso y una bolita dura y morada si hay trombosis.",
            ]}
          />
          <p className={`${p} mt-4`}>
            El sangrado no debe atribuirse automáticamente a las hemorroides. Si quieres conocer otras causas, lee{" "}
            <Link href="/blog/sangrado-al-evacuar-causas" className={link}>Sangrado al evacuar: causas posibles y cuándo preocuparte</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Tratamiento sin cirugía</h2>
          <h3 className={h3}>Cambios en la dieta y en los hábitos</h3>
          <p className={p}>Son la base del tratamiento en todos los grados y ayudan a evitar que las hemorroides empeoren:</p>
          <Bullets
            items={[
              "Consumir fibra todos los días y, si el médico lo indica, un suplemento de fibra.",
              "Beber suficiente agua.",
              "No pasar mucho tiempo sentado en el baño (evita usar el celular ahí).",
              "No pujar con fuerza ni aguantar las ganas de evacuar.",
              "Mantenerte activo físicamente.",
            ]}
          />
          <h3 className={h3}>Medicamentos</h3>
          <p className={p}>
            Las pomadas, supositorios y algunos medicamentos orales pueden aliviar síntomas durante las crisis. Son útiles para controlar molestias, pero no corrigen el prolapso.
          </p>
          <h3 className={h3}>Procedimientos en consultorio</h3>
          <p className={p}>
            La <strong>ligadura con banda elástica</strong> es uno de los procedimientos más utilizados para hemorroides internas de grado I a III que siguen dando síntomas. Se coloca una pequeña liga en la base de la hemorroide, lo que corta su circulación; en unos días se desprende. Suele realizarse sin anestesia general y puede requerir varias sesiones. Otras opciones en casos seleccionados son la escleroterapia o la coagulación.
          </p>
        </div>

        <div>
          <h2 className={h2}>¿Cuándo se recomienda la cirugía?</h2>
          <p className={p}>
            La <strong>hemorroidectomía</strong> consiste en retirar el tejido hemorroidal sobrante. Es el tratamiento más definitivo y suele considerarse en:
          </p>
          <Bullets
            items={[
              "Hemorroides de grado III o IV.",
              "Hemorroides mixtas grandes o con un componente externo importante.",
              "Sangrado recurrente que no responde a otros tratamientos.",
              "Síntomas que regresan después de procedimientos en consultorio.",
            ]}
          />
          <p className={`${p} mt-4`}>
            La recuperación implica algunas semanas de cuidados, y el dolor se controla con un esquema de medicamentos y medidas locales. Si te preocupa esta parte, lee{" "}
            <Link href="/blog/cuanto-duele-cirugia-hemorroides" className={link}>¿Cuánto duele realmente la cirugía de hemorroides?</Link>.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Busca atención pronto si presentas:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Sangrado abundante, con coágulos o mareo",
              "Una hemorroide que salió y no se puede regresar, con dolor intenso",
              "Fiebre o hinchazón que aumenta",
              "Sangrado acompañado de cambios en las evacuaciones o pérdida de peso",
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
