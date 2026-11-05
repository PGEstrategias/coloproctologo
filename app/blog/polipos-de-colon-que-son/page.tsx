import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "polipos-de-colon-que-son")!

export const metadata: Metadata = {
  title: "Pólipos de colon: qué son, tipos y cuándo se retiran",
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

const types = [
  ["Adenomas", "Son los pólipos más importantes porque tienen el potencial de transformarse en cáncer con el paso de los años. No todos lo hacen, pero por eso se recomienda retirarlos."],
  ["Pólipos serrados", "Incluyen los pólipos serrados sésiles, que también pueden evolucionar a cáncer y en ocasiones son planos y más difíciles de ver."],
  ["Pólipos hiperplásicos", "Suelen ser pequeños y, en general, tienen muy bajo riesgo de convertirse en cáncer, sobre todo cuando están en el recto o el sigmoides."],
  ["Pólipos inflamatorios", "Aparecen en personas con inflamación crónica del colon, como colitis ulcerosa o enfermedad de Crohn, y no son precancerosos por sí mismos."],
]

const riskFactors = [
  "Tener 45 años o más",
  "Familiares directos con pólipos o cáncer colorrectal",
  "Haber tenido pólipos antes",
  "Enfermedad inflamatoria intestinal de larga evolución",
  "Tabaquismo y consumo frecuente de alcohol",
  "Sobrepeso, poca actividad física y dieta alta en carnes rojas o procesadas",
]

const faqs = [
  {
    q: "¿Tener un pólipo significa tener cáncer?",
    a: "No. La gran mayoría de los pólipos son benignos. Algunos tipos, como los adenomas, pueden transformarse en cáncer con el tiempo, por lo general en el transcurso de muchos años. Precisamente por eso se retiran durante la colonoscopia: así se interrumpe ese proceso.",
  },
  {
    q: "¿Duele que me quiten un pólipo?",
    a: "No. La polipectomía se realiza durante la colonoscopia, generalmente con sedación, y el revestimiento interno del colon no percibe el dolor como la piel. Después del estudio puede haber algo de distensión por el aire, que desaparece en pocas horas.",
  },
  {
    q: "¿Qué riesgos tiene retirar un pólipo?",
    a: "Es un procedimiento seguro. Las complicaciones son poco frecuentes e incluyen sangrado (que puede aparecer incluso días después) y, rara vez, una perforación. Si después del estudio tienes sangrado abundante, dolor abdominal intenso o fiebre, comunícate con tu médico de inmediato.",
  },
  {
    q: "¿Cada cuánto debo repetir la colonoscopia si me encontraron pólipos?",
    a: "Depende del número, tamaño y tipo de pólipos según el reporte de patología, y de la calidad de la preparación. Puede ir desde uno hasta varios años. Tu médico te indicará el intervalo exacto con base en tus resultados.",
  },
  {
    q: "¿Se pueden prevenir los pólipos?",
    a: "No siempre, pero se puede reducir el riesgo: no fumar, moderar el alcohol, mantener un peso saludable, hacer actividad física y comer más fibra, frutas y verduras, con menos carnes procesadas. Lo más eficaz para prevenir el cáncer colorrectal es realizar el tamizaje a la edad recomendada.",
  },
]

const references = [
  ["American Society of Colon and Rectal Surgeons (ASCRS). Polyps of the Colon and Rectum.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Polyps-of-the-Colon-and-Rectum.aspx"],
  ["National Health Service (NHS). Bowel polyps.", "https://www.nhs.uk/conditions/bowel-polyps/"],
  ["MedlinePlus en español. Pólipos del colon.", "https://medlineplus.gov/spanish/colonicpolyps.html"],
  ["Instituto Nacional del Cáncer (NCI). Prevención del cáncer colorrectal (PDQ).", "https://www.cancer.gov/espanol/tipos/colorrectal/paciente/prevencion-colorrectal-pdq"],
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
        ctaTitle="¿Te encontraron pólipos o te toca tu colonoscopia? Agenda en Puebla"
        ctaSubtitle="Revisamos tus resultados, te explicamos qué significan y definimos cuándo necesitas tu siguiente estudio."
        reviewerNote="Este artículo es informativo. La interpretación de tu reporte de colonoscopia y patología debe hacerla tu médico."
        summary={
          <>
            Un <strong>pólipo de colon</strong> es un crecimiento en la pared interna del intestino grueso. La mayoría son benignos y <strong>no causan síntomas</strong>, pero algunos tipos (como los adenomas) pueden convertirse en cáncer con los años. Por eso se buscan y se <strong>retiran durante la colonoscopia</strong>, lo que es una de las formas más eficaces de prevenir el cáncer colorrectal.
          </>
        }
      >
        <div>
          <p className={p}>
            Escuchar &quot;te encontramos un pólipo&quot; puede asustar. La buena noticia es que encontrarlo y retirarlo a tiempo es justamente el objetivo de la colonoscopia de detección. Entender qué tipo de pólipo es y qué sigue después te ayuda a tomar decisiones con tranquilidad.
          </p>
        </div>

        <div>
          <h2 className={h2}>¿Qué es un pólipo de colon?</h2>
          <p className={p}>
            Es una pequeña elevación o crecimiento de células en la mucosa del colon o del recto. Pueden ser planos o tener forma de hongo con un tallo, medir desde unos milímetros hasta varios centímetros, y presentarse uno solo o varios. Son más frecuentes conforme aumenta la edad.
          </p>
        </div>

        <div>
          <h2 className={h2}>Tipos de pólipos</h2>
          <p className={p}>
            El tipo exacto solo se conoce cuando el pólipo retirado se analiza en el laboratorio de patología:
          </p>
          <div className="space-y-3 mt-4">
            {types.map(([title, description]) => (
              <div key={title} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className={`${p} mt-4`}>
            En general, el riesgo es mayor cuanto más grande es el pólipo, cuantos más pólipos hay y según ciertas características que describe el patólogo.
          </p>
        </div>

        <div>
          <h2 className={h2}>¿Dan síntomas?</h2>
          <p className={p}>
            La mayoría <strong>no da ningún síntoma</strong>, por eso no conviene esperar a sentir algo para revisarse. Cuando llegan a dar molestias, pueden presentarse:
          </p>
          <Bullets
            items={[
              "Sangre en las heces o en el papel, a veces oscura y mezclada con la evacuación.",
              "Cambios persistentes en el ritmo de las evacuaciones.",
              "Anemia por pérdida de sangre lenta, que se manifiesta con cansancio o palidez.",
              "En pólipos grandes, moco en las evacuaciones.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Estos síntomas también pueden deberse a otras causas. Te puede interesar{" "}
            <Link href="/blog/sangrado-al-evacuar-causas" className={link}>Sangrado al evacuar: 7 causas posibles y cuándo debes preocuparte</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Factores de riesgo</h2>
          <Bullets items={riskFactors} />
        </div>

        <div>
          <h2 className={h2}>¿Cómo se detectan y se retiran?</h2>
          <p className={p}>
            La <strong>colonoscopia</strong> es el estudio de elección porque permite ver todo el colon y, en el mismo procedimiento, retirar los pólipos que se encuentren. A esto se le llama <strong>polipectomía</strong>: con pinzas o un asa especial se corta el pólipo y se envía a patología. La mayoría de los pólipos se retiran en ese mismo momento, sin necesidad de cirugía.
          </p>
          <p className={`${p} mt-3`}>
            Otras pruebas, como la búsqueda de sangre oculta en heces, pueden ayudar como tamizaje; si salen alteradas, el siguiente paso es una colonoscopia. Una buena preparación es clave para no pasar por alto pólipos pequeños o planos; aquí te explicamos{" "}
            <Link href="/blog/preparacion-colonoscopia-que-esperar" className={link}>cómo prepararte para tu colonoscopia</Link>.
          </p>
          <h3 className={h3}>¿Y si el pólipo es muy grande?</h3>
          <p className={p}>
            Los pólipos grandes o planos a veces requieren técnicas endoscópicas avanzadas. En pocos casos, cuando no es posible retirarlos de forma segura por endoscopia o el reporte muestra cambios preocupantes, se recomienda cirugía para extirpar el segmento de colon afectado.
          </p>
        </div>

        <div>
          <h2 className={h2}>Después de retirar un pólipo</h2>
          <Bullets
            items={[
              "Espera el reporte de patología: indica el tipo de pólipo y si fue retirado por completo.",
              "Sigue las indicaciones sobre medicamentos anticoagulantes o antiagregantes antes y después del procedimiento.",
              "Puede haber un poco de sangre en la primera evacuación; si el sangrado es abundante o persistente, avisa a tu médico.",
              "Programa tu colonoscopia de vigilancia en la fecha que te indiquen.",
            ]}
          />
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Consulta pronto si tienes:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Sangre en las evacuaciones",
              "Cambios en tus evacuaciones por más de algunas semanas",
              "Anemia sin causa clara",
              "Pérdida de peso sin explicación",
              "Antecedente familiar de cáncer colorrectal y nunca te has revisado",
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
