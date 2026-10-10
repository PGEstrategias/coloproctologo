import type { Metadata } from "next"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "fistula-anal-absceso-perianal")!

export const metadata: Metadata = {
  title: "Fístula anal y absceso perianal: síntomas y tratamiento",
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

const comparison = [
  ["Qué es", "Una cavidad con pus causada por una infección", "Un conducto entre el canal anal y la piel"],
  ["Inicio habitual", "Puede aparecer de forma relativamente rápida", "Puede manifestarse después de un absceso o persistir tras su drenaje"],
  ["Dolor", "Puede ser intenso, constante y progresivo", "Puede ser intermitente o persistente"],
  ["Inflamación", "Es frecuente que exista hinchazón y sensibilidad", "Puede haber irritación o inflamación alrededor de la abertura"],
  ["Secreción", "Puede aparecer cuando el absceso drena", "Puede existir salida recurrente de pus o sangre"],
  ["Tratamiento", "Con frecuencia requiere drenaje", "Generalmente requiere valorar un procedimiento específico"],
  ["Principal preocupación", "Controlar la infección y evitar su progresión", "Tratar el trayecto y preservar la función de los esfínteres"],
]

const faqs = [
  {
    q: "¿Un absceso perianal siempre se convierte en una fístula anal?",
    a: "No. Un absceso puede resolverse después del tratamiento sin que quede una fístula. Sin embargo, algunas personas desarrollan un trayecto persistente entre el canal anal y la piel. Si después del drenaje continúan la secreción o los episodios de inflamación, es importante volver a consultar.",
  },
  {
    q: "¿Una fístula anal puede desaparecer sola?",
    a: "En general, las fístulas anales no se cierran de forma definitiva por sí solas. Aunque la abertura externa parezca cerrar o los síntomas disminuyan temporalmente, el conducto puede permanecer y volver a causar molestias.",
  },
  {
    q: "¿Qué significa tener una bolita con pus cerca del ano?",
    a: "Puede deberse a un absceso, pero también existen otras lesiones que pueden parecerse. No es posible confirmar la causa únicamente por su apariencia. Evita exprimirla o pincharla y busca una valoración médica, especialmente si aumenta el dolor o hay fiebre.",
  },
  {
    q: "¿Los antibióticos curan un absceso perianal?",
    a: "No siempre. Cuando existe una colección de pus que necesita drenaje, los antibióticos por sí solos pueden no ser suficientes. El médico decidirá si se requiere drenaje, antibióticos o ambos.",
  },
  {
    q: "¿La cirugía de una fístula anal puede afectar el control de las evacuaciones?",
    a: "Existe ese riesgo, especialmente si el trayecto atraviesa una parte importante de los esfínteres. Por eso, la técnica se selecciona considerando la anatomía de la fístula y la preservación muscular. Antes de un procedimiento, conversa con el cirujano sobre los riesgos y las alternativas.",
  },
  {
    q: "¿La fístula anal siempre produce dolor?",
    a: "No. Algunas fístulas provocan principalmente secreción, irritación o humedad, mientras que otras causan dolor, sobre todo cuando se obstruye el drenaje o se forma un nuevo absceso.",
  },
  {
    q: "¿Puedo esperar a que un absceso drene por sí solo?",
    a: "No es recomendable. Un absceso puede necesitar drenaje médico oportuno. Si presentas fiebre, dolor intenso o progresivo, enrojecimiento que se extiende o malestar general, busca atención urgente en lugar de esperar una consulta rutinaria.",
  },
  {
    q: "¿Cuándo debo consultar a un coloproctólogo en Puebla?",
    a: "Si tienes dolor anal persistente, una bolita que reaparece, salida recurrente de pus o una herida cercana al ano que no termina de cerrar, solicita una valoración. Si presentas signos de alarma, no esperes a una cita programada: acude a un servicio de atención urgente.",
  },
]

const references = [
  ["American Society of Colon and Rectal Surgeons (ASCRS). Absceso anal y fístula.", "https://fascrs.org/Web/Patients/Diseases-and-Conditions/A-Z/Absceso-Anal-y-La-Fistula.aspx"],
  ["Mayo Clinic. Anal fistula: Symptoms and causes.", "https://www.mayoclinic.org/diseases-conditions/anal-fistula/symptoms-causes/syc-20352871"],
  ["Mayo Clinic. Anal fistula: Diagnosis and treatment.", "https://www.mayoclinic.org/diseases-conditions/anal-fistula/diagnosis-treatment/drc-20537243"],
  ["National Health Service (NHS). Anal fistula.", "https://www.nhs.uk/conditions/anal-fistula/"],
  ["National Health Service (NHS). Anal fistula: Treatment.", "https://www.nhs.uk/conditions/anal-fistula/treatment/"],
  ["National Health Service (NHS). Anal pain.", "https://www.nhs.uk/symptoms/anal-pain/"],
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
        ctaTitle="Agenda una consulta de coloproctología en Puebla"
        ctaSubtitle="Si presentas dolor anal persistente, inflamación, una bolita con pus cerca del ano o secreción recurrente, una valoración especializada puede ayudar a identificar la causa y determinar los siguientes pasos."
        reviewerNote="No inicies antibióticos, no manipules lesiones anales y no retrases la atención si presentas signos de alarma."
        summary={
          <>
            Un <strong>absceso perianal</strong> es una acumulación de pus causada por una infección cerca del ano; puede provocar dolor intenso, inflamación y fiebre. Una <strong>fístula anal</strong> es un pequeño conducto anormal que conecta el interior del canal anal con la piel y puede producir secreción recurrente. Una fístula puede aparecer después de un absceso, pero no todos los abscesos evolucionan así. Si tienes fiebre, dolor intenso o enrojecimiento que se extiende, busca atención médica urgente.
          </>
        }
      >
        <div>
          <p className={p}>
            ¿Tienes dolor persistente cerca del ano, notas una bolita inflamada o has observado que sale pus de la zona? Estos síntomas pueden estar relacionados con un absceso perianal o una fístula anal, dos problemas que pueden aparecer de forma relacionada, pero que no son lo mismo. Un absceso puede necesitar drenaje oportuno para controlar la infección, mientras que una fístula suele requerir una valoración especializada para tratarla sin comprometer los músculos que controlan las evacuaciones.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué es un absceso perianal</h2>
          <p className={p}>
            Es una acumulación de pus en los tejidos que rodean el ano. En muchos casos, la infección comienza en pequeñas glándulas dentro del canal anal: cuando una se obstruye o infecta, puede formarse una colección de pus que aumenta de tamaño y provoca dolor. Puede manifestarse como una zona hinchada, roja y sensible, o como una bolita dolorosa que impide sentarse con comodidad.
          </p>
          <p className={`${p} mt-3`}>
            No todos los abscesos son visibles desde el exterior. Algunos se encuentran en tejidos más profundos y pueden provocar dolor importante sin una bolita claramente identificable.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 mt-4">
            <p className="font-bold text-red-700 text-sm sm:text-base mb-1">¿Notas una bolita con pus cerca del ano?</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              No intentes exprimirla, pincharla ni abrirla en casa: puedes lesionar los tejidos, empeorar la infección o retrasar el tratamiento adecuado. Solicita valoración médica; si además presentas fiebre o dolor intenso o progresivo, busca atención urgente.
            </p>
          </div>
        </div>

        <div>
          <h2 className={h2}>Qué es una fístula anal</h2>
          <p className={p}>
            Es un conducto anormal que conecta el interior del canal anal con la piel cercana al ano, como un pequeño túnel. Con frecuencia aparece después de una infección de las glándulas anales que produjo un absceso: aunque el absceso drene, el conducto puede permanecer abierto. Por eso algunas personas presentan secreción repetida de pus o pequeñas cantidades de sangre por un punto de la piel cercano al ano.
          </p>
          <p className={`${p} mt-3`}>
            Las fístulas pueden tener trayectos sencillos o complejos. Algunas atraviesan parte de los <strong>esfínteres anales</strong>, los músculos que ayudan a controlar la salida de gases y heces. Conocer el recorrido de la fístula es fundamental para planear el tratamiento. Las fístulas anales generalmente no se cierran de manera definitiva por sí solas.
          </p>
        </div>

        <div>
          <h2 className={h2}>Diferencias entre una fístula y un absceso</h2>
          <p className={`${p} mb-4`}>
            La diferencia esencial: <strong>el absceso es una acumulación de pus; la fístula es un conducto anormal</strong>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-gray-900">
                <tr>
                  <th className="p-3 sm:p-4 font-bold">Característica</th>
                  <th className="p-3 sm:p-4 font-bold">Absceso perianal</th>
                  <th className="p-3 sm:p-4 font-bold">Fístula anal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {comparison.map(([feature, abscess, fistula]) => (
                  <tr key={feature}>
                    <td className="p-3 sm:p-4 font-medium text-gray-900 align-top">{feature}</td>
                    <td className="p-3 sm:p-4 align-top">{abscess}</td>
                    <td className="p-3 sm:p-4 align-top">{fistula}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${p} mt-4`}>
            Un absceso puede drenar y aliviar temporalmente el dolor sin que el problema haya quedado resuelto. Aunque los síntomas mejoren después de que sale pus, no conviene asumir que la infección desapareció por completo.
          </p>
        </div>

        <div>
          <h2 className={h2}>Síntomas más frecuentes</h2>
          <h3 className={h3}>Síntomas de un absceso perianal</h3>
          <Bullets
            items={[
              "Dolor constante o pulsátil cerca del ano.",
              "Inflamación, enrojecimiento o sensibilidad al tocar la zona.",
              "Una bolita dolorosa o sensación de presión alrededor del ano.",
              "Dolor al sentarse, caminar o evacuar.",
              "Salida espontánea de pus si el absceso se abre.",
              "Fiebre, escalofríos o malestar general en algunos casos.",
            ]}
          />
          <h3 className={h3}>Síntomas de una fístula anal</h3>
          <Bullets
            items={[
              "Un pequeño orificio en la piel cerca del ano.",
              "Secreción recurrente de pus o líquido con mal olor.",
              "Manchas de sangre en la ropa interior o al limpiarse.",
              "Irritación o humedad persistente en la piel cercana.",
              "Dolor o molestia al sentarse o evacuar.",
              "Episodios repetidos de inflamación que mejoran cuando se produce drenaje.",
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Tener una bolita, dolor o secreción no confirma por sí solo que exista un absceso o una fístula. Hay otras causas de molestias anales, por lo que el diagnóstico requiere exploración médica.
          </p>
        </div>

        <div>
          <h2 className={h2}>Por qué aparecen</h2>
          <p className={p}>
            La causa más habitual de ambos es una <strong>infección de las glándulas anales</strong>. Si queda un conducto entre el canal anal y la piel después de un absceso, puede persistir una fístula. Otras causas posibles incluyen la enfermedad de Crohn, ciertas infecciones, traumatismos y complicaciones de procedimientos o cirugías previas en la zona.
          </p>
          <p className={`${p} mt-3`}>
            Condiciones como la diabetes o un sistema inmunitario debilitado hacen especialmente importante recibir atención oportuna ante una infección.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">No esperes a una cita rutinaria si presentas:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Fiebre o escalofríos junto con dolor o inflamación anal",
              "Dolor intenso o que aumenta progresivamente",
              "Enrojecimiento o hinchazón que se extiende",
              "Malestar general importante o debilidad marcada",
              "Empeoramiento rápido de los síntomas",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">{item}</p></div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Si tienes diabetes, inmunosupresión u otra condición que reduzca las defensas, busca valoración sin demora. Un absceso puede necesitar tratamiento oportuno incluso cuando no hay fiebre.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cuándo acudir al coloproctólogo</h2>
          <p className={p}>
            Solicita una valoración si tienes dolor anal persistente, una bolita que se inflama repetidamente, secreción de pus, una herida que no termina de cerrar o un absceso que vuelve a aparecer. Estos síntomas no deben atribuirse automáticamente a hemorroides: distintas enfermedades anales producen molestias similares pero requieren tratamientos diferentes.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cómo se realiza el diagnóstico</h2>
          <p className={p}>
            Comienza con una conversación sobre cuándo empezaron las molestias, cómo han evolucionado, si ha habido fiebre, episodios previos de drenaje o cirugía en la zona, y antecedentes como enfermedad de Crohn o diabetes.
          </p>
          <p className={`${p} mt-3`}>
            Después se revisa la piel alrededor del ano en busca de inflamación, aberturas o secreción. Según el caso, puede realizarse un tacto rectal o una anoscopia. Si existe dolor intenso o infección aguda, el médico determinará qué maniobras son seguras.
          </p>
          <h3 className={h3}>¿Cuándo se necesitan estudios de imagen?</h3>
          <p className={p}>No todos los casos los requieren. Cuando se sospecha un absceso profundo o una fístula compleja, pueden indicarse:</p>
          <Bullets
            items={[
              <><strong>Resonancia magnética de la pelvis:</strong> ayuda a identificar el recorrido de una fístula y su relación con los esfínteres.</>,
              <><strong>Ultrasonido endoanal:</strong> permite valorar estructuras y trayectos cercanos al canal anal.</>,
              <><strong>Tomografía computarizada:</strong> en situaciones seleccionadas, como sospecha de infección profunda.</>,
            ]}
          />
          <p className={`${p} mt-3`}>En ciertos casos también se necesita una exploración bajo anestesia para definir mejor la anatomía y planear el tratamiento.</p>
        </div>

        <div>
          <h2 className={h2}>Cómo se trata un absceso perianal</h2>
          <p className={p}>
            El tratamiento principal de muchos abscesos es el <strong>drenaje</strong>: se abre la cavidad para permitir la salida del pus y controlar la infección. El momento y la forma dependen de la localización, la profundidad y el estado general del paciente; los abscesos profundos pueden necesitar atención hospitalaria o un procedimiento bajo anestesia.
          </p>
          <h3 className={h3}>¿Por qué los antibióticos solos no siempre son suficientes?</h3>
          <p className={p}>
            Los antibióticos no siempre eliminan una colección de pus que requiere drenaje, y tomarlos sin valoración puede retrasar el tratamiento necesario. Pueden indicarse como complemento del drenaje en determinadas situaciones. <strong>No te automediques ni utilices antibióticos sobrantes.</strong>
          </p>
          <h3 className={h3}>¿Qué sucede después del drenaje?</h3>
          <p className={p}>
            El médico indicará los cuidados de la herida, la higiene, el control del dolor y la vigilancia. En algunos pacientes el absceso se resuelve sin que persista una fístula; en otros puede quedar un trayecto que requiera una nueva valoración.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cómo se trata una fístula anal</h2>
          <p className={p}>
            Depende de su recorrido, su complejidad, la causa y la cantidad de músculo esfínter involucrado. En muchos casos se necesita cirugía. El objetivo es tratar la fístula, controlar la infección y <strong>preservar al máximo el control de gases y evacuaciones</strong>.
          </p>
          <div className="space-y-3 mt-4">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Fistulotomía</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Consiste en abrir el trayecto para que cicatrice desde el fondo. Puede ser apropiada para determinadas fístulas sencillas, cuando el riesgo para los esfínteres es bajo.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Colocación de un setón</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Un hilo quirúrgico a través del trayecto que ayuda a mantener el drenaje. Puede formar parte del tratamiento de fístulas que atraviesan una porción importante del esfínter.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Técnicas para preservar el esfínter</h3>
              <p className="text-gray-700 text-sm leading-relaxed">En fístulas complejas pueden considerarse procedimientos como LIFT (ligadura del trayecto entre los esfínteres) o un colgajo de avance, en casos seleccionados.</p>
            </div>
          </div>
          <p className={`${p} mt-4`}>
            Si una cirugía compromete demasiado los esfínteres, puede aumentar el riesgo de incontinencia. Por eso el tratamiento debe individualizarse, y conviene hablar sobre la posibilidad de recurrencia, las complicaciones y la recuperación esperada antes de decidir el procedimiento.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué ocurre si no se recibe tratamiento</h2>
          <p className={p}>
            Un absceso no tratado puede crecer, extender la infección a tejidos cercanos o causar síntomas generales; aunque drene espontáneamente, no siempre significa que la infección se resolvió. Una fístula puede persistir con secreción recurrente, irritación y nuevos abscesos, y algunos trayectos pueden ramificarse y volverse más difíciles de tratar.
          </p>
        </div>

        <div>
          <h2 className={h2}>Recuperación y cómo reducir el riesgo de complicaciones</h2>
          <p className={p}>No existe un tiempo único de recuperación. Siempre que sean compatibles con las indicaciones de tu médico, pueden ayudar:</p>
          <Bullets
            items={[
              "Mantener limpia la zona anal y secarla suavemente, sin frotar.",
              "Realizar baños de asiento con agua tibia si el médico los recomienda.",
              "Beber suficiente agua y consumir fibra para evitar el estreñimiento.",
              "Evitar pujar excesivamente durante las evacuaciones.",
              "Utilizar únicamente los medicamentos indicados.",
              "Acudir a las revisiones programadas.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Si después del tratamiento aparece fiebre, aumenta el dolor, se extiende el enrojecimiento o empeora la secreción, contacta al equipo médico. La persistencia de un pequeño orificio o la reaparición de secreción también deben comunicarse durante el seguimiento.
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
