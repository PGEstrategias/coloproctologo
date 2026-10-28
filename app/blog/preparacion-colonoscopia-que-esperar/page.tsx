import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "preparacion-colonoscopia-que-esperar")!

export const metadata: Metadata = {
  title: "Colonoscopia: preparación, qué esperar y cuándo hacerla",
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

const timeline = [
  ["7 días antes", "Informa al médico todos tus medicamentos, en especial anticoagulantes, antiagregantes, medicamentos para la diabetes y suplementos de hierro. No suspendas nada por tu cuenta."],
  ["2 a 3 días antes", "Dieta baja en residuo: evita semillas, frutas con cáscara, verduras crudas, granos enteros y nueces, según las indicaciones que recibas."],
  ["1 día antes", "Dieta de líquidos claros (agua, caldo colado, té, bebidas sin colorantes rojos o morados) y toma del laxante de preparación en el horario indicado."],
  ["El día del estudio", "Completa la segunda dosis si así se indicó, respeta el ayuno y acude acompañado: después de la sedación no debes manejar."],
]

const faqs = [
  {
    q: "¿La colonoscopia duele?",
    a: "Generalmente se realiza con sedación, por lo que la mayoría de las personas no siente molestias durante el estudio ni lo recuerda. Después puede haber sensación de inflamación o gases que suele desaparecer en pocas horas.",
  },
  {
    q: "¿Cuánto dura una colonoscopia?",
    a: "El estudio suele durar entre 20 y 45 minutos, aunque debes considerar el tiempo de preparación previa en la clínica y la recuperación de la sedación. En total, planea pasar algunas horas el día del estudio.",
  },
  {
    q: "¿A qué edad debo hacerme mi primera colonoscopia?",
    a: "Para personas con riesgo promedio, guías internacionales recomiendan iniciar la detección de cáncer colorrectal a partir de los 45 años. Si tienes antecedentes familiares de cáncer colorrectal o pólipos, enfermedad inflamatoria intestinal u otros factores de riesgo, puede ser necesario comenzar antes. La colonoscopia es uno de varios métodos de detección; tu médico te ayudará a elegir.",
  },
  {
    q: "¿Qué pasa si encuentran un pólipo?",
    a: "Con frecuencia los pólipos pueden retirarse durante el mismo estudio. Después se envían a análisis para saber de qué tipo son. Retirarlos es una de las formas más efectivas de prevenir el cáncer colorrectal.",
  },
  {
    q: "¿Qué pasa si mi preparación no quedó bien?",
    a: "Si el colon no está suficientemente limpio, pueden pasar desapercibidas algunas lesiones y quizá sea necesario repetir el estudio. Por eso es tan importante seguir la dieta y los horarios. Si tienes vómito o no logras terminar la preparación, comunícate con el equipo médico.",
  },
  {
    q: "¿Cuáles son los riesgos de una colonoscopia?",
    a: "Es un procedimiento seguro, pero como todo estudio tiene riesgos poco frecuentes, como sangrado (sobre todo si se retiran pólipos), reacciones a la sedación o, de forma rara, perforación del intestino. El médico te explicará los riesgos antes del estudio.",
  },
]

const references = [
  ["U.S. Preventive Services Task Force (USPSTF). Colorectal Cancer: Screening.", "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening"],
  ["National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). Colonoscopy.", "https://www.niddk.nih.gov/health-information/diagnostic-tests/colonoscopy"],
  ["American Society of Colon and Rectal Surgeons (ASCRS). Colonoscopy.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Colonoscopy.aspx"],
  ["MedlinePlus en español. Colonoscopia.", "https://medlineplus.gov/spanish/ency/article/003886.htm"],
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
        ctaTitle="Agenda tu colonoscopia en Puebla"
        ctaSubtitle="Te damos indicaciones de preparación claras y personalizadas, y resolvemos tus dudas antes del estudio para que llegues tranquilo."
        reviewerNote="Las indicaciones de preparación varían según el laxante y tu estado de salud. Sigue siempre las instrucciones específicas que te entregue tu médico."
        summary={
          <>
            La <strong>colonoscopia</strong> es un estudio que permite revisar todo el colon con una cámara delgada y flexible, generalmente bajo <strong>sedación</strong>. Sirve para encontrar la causa de síntomas como sangrado o cambios en las evacuaciones, y para <strong>detectar y retirar pólipos</strong> antes de que se conviertan en cáncer. La parte más importante para que el estudio sea útil es una buena preparación: dieta especial y un laxante que limpia el intestino.
          </>
        }
      >
        <div>
          <p className={p}>
            A muchas personas les preocupa más la preparación que el estudio en sí. Es comprensible: hay que cambiar la dieta, tomar un laxante y pasar varias horas cerca del baño. Pero saber qué esperar paso a paso hace el proceso mucho más sencillo, y una buena limpieza es lo que permite que el estudio sea confiable.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué es una colonoscopia y para qué sirve</h2>
          <p className={p}>
            Se introduce por el ano un tubo flexible con una cámara (colonoscopio) que permite ver el recto y todo el colon. Durante el estudio también se pueden tomar biopsias, retirar pólipos o tratar algunas lesiones. Se indica principalmente para:
          </p>
          <Bullets
            items={[
              "Detección de cáncer colorrectal en personas sin síntomas.",
              "Sangrado rectal sin causa clara o anemia.",
              "Cambios persistentes en el ritmo de las evacuaciones.",
              "Dolor abdominal o diarrea crónica en estudio.",
              "Seguimiento después de retirar pólipos o de una cirugía de colon.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Si tienes cambios en tus evacuaciones, te puede interesar{" "}
            <Link href="/blog/cambios-en-las-evacuaciones-cuando-preocuparse" className={link}>Cambios en las evacuaciones: cuándo preocuparse y cuándo estudiar el colon</Link>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cómo prepararte, paso a paso</h2>
          <p className={`${p} mb-4`}>
            Este es un esquema general. Tu médico te dará indicaciones específicas según el tipo de laxante y tus condiciones de salud.
          </p>
          <div className="space-y-3">
            {timeline.map(([when, what]) => (
              <div key={when} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{when}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{what}</p>
              </div>
            ))}
          </div>
          <h3 className={h3}>Consejos para que la preparación sea más llevadera</h3>
          <Bullets
            items={[
              "Toma el laxante frío y, si lo permite tu indicación, con popote.",
              "Bebe líquidos claros adicionales para mantenerte hidratado.",
              "Usa ropa cómoda y quédate cerca de un baño.",
              "Aplica una crema protectora alrededor del ano para evitar irritación.",
              "La preparación está funcionando cuando lo que evacúas es líquido, claro o amarillento, sin restos sólidos.",
            ]}
          />
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mt-4">
            <p className="font-bold text-amber-800 text-sm sm:text-base mb-1">Importante si tomas medicamentos</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Si tomas anticoagulantes, antiagregantes, insulina u otros medicamentos para la diabetes, o si tienes enfermedad renal o cardiaca, avisa con anticipación. Puede ser necesario ajustar dosis o elegir otro tipo de preparación. Nunca suspendas un medicamento sin indicación médica.
            </p>
          </div>
        </div>

        <div>
          <h2 className={h2}>Qué sucede el día del estudio</h2>
          <p className={p}>
            Al llegar, se revisan tus datos y medicamentos, y se coloca una vía en la vena para administrar la sedación. Durante el estudio estarás acostado de lado mientras el médico avanza el colonoscopio y examina la pared del colon. Se introduce aire o dióxido de carbono para distender el intestino y ver mejor.
          </p>
          <p className={`${p} mt-3`}>
            Al terminar, pasarás un tiempo en recuperación hasta que pase el efecto de la sedación. Es normal sentir gases o algo de inflamación. Antes de irte, el médico te explicará lo que encontró; si se tomaron biopsias o se retiraron pólipos, el resultado de patología llegará después.
          </p>
        </div>

        <div>
          <h2 className={h2}>Después de la colonoscopia</h2>
          <Bullets
            items={[
              "No manejes, no firmes documentos importantes ni operes maquinaria el resto del día.",
              "Generalmente puedes volver a comer de forma gradual, empezando por alimentos ligeros.",
              "Si te retiraron pólipos, sigue las indicaciones sobre medicamentos y actividad.",
              "Un poco de sangre en la primera evacuación puede ser normal si se tomaron biopsias.",
            ]}
          />
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Después del estudio, busca atención si presentas:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Dolor abdominal intenso o que aumenta",
              "Fiebre o escalofríos",
              "Sangrado abundante o repetido",
              "Abdomen duro o muy distendido",
              "Vómito persistente o mareo intenso",
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
