import type { Metadata } from "next"
import Link from "next/link"

import BlogPostLayout from "@/components/blog/blog-post-layout"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "cambios-en-las-evacuaciones-cuando-preocuparse")!

export const metadata: Metadata = {
  title: "Cambios en las evacuaciones: cuándo preocuparse",
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

const stoolAspects = [
  {
    title: "Frecuencia",
    text: "Evacuar con mayor o menor frecuencia puede relacionarse con cambios de alimentación, hidratación, actividad física, estrés o medicamentos. Conviene investigar si la modificación es persistente o se acompaña de dolor, sangrado u otros síntomas.",
  },
  {
    title: "Consistencia",
    text: "Las heces duras y fragmentadas pueden acompañar al estreñimiento; las blandas o acuosas son características de la diarrea. La consistencia puede cambiar temporalmente por la alimentación, una infección o ciertos medicamentos.",
  },
  {
    title: "Forma y diámetro",
    text: "Las heces varían de tamaño y forma según su contenido de agua y el tránsito intestinal. Una modificación ocasional no demuestra que exista una lesión; una alteración persistente merece evaluarse dentro del contexto clínico.",
  },
  {
    title: "Color",
    text: "El marrón suele ser normal y algunos alimentos o suplementos modifican el tono. Las heces negras, pegajosas, similares al alquitrán, o la sangre visible requieren atención médica. Las heces persistentemente muy pálidas también merecen valoración.",
  },
]

const commonCauses = [
  ["Cambios en la alimentación", "Aumentar o reducir la fibra, modificar los horarios o consumir ciertos alimentos puede cambiar la frecuencia y consistencia."],
  ["Hidratación insuficiente", "Puede contribuir a que las heces sean duras y difíciles de expulsar."],
  ["Estrés y cambios de rutina", "Pueden modificar el tránsito intestinal y agravar síntomas funcionales."],
  ["Medicamentos y suplementos", "Algunos producen estreñimiento o diarrea; importa identificar cuándo comenzaron los síntomas respecto al tratamiento."],
  ["Infecciones digestivas", "Pueden provocar diarrea, cólicos, fiebre o náuseas."],
  ["Intolerancias y problemas de absorción", "Pueden causar diarrea, gases, distensión y molestias relacionadas con determinados alimentos."],
  ["Trastornos funcionales intestinales", "Pueden generar dolor, estreñimiento, diarrea o alternancia de ambos sin que exista necesariamente una lesión estructural."],
  ["Enfermedades inflamatorias o estructurales", "Pueden requerir análisis, estudios de imagen o exploración directa del intestino, según los síntomas."],
]

const faqs = [
  {
    q: "¿Cuándo debo preocuparme por los cambios en las evacuaciones?",
    a: "Cuando el cambio es nuevo, persiste, se repite sin una causa clara o se acompaña de sangre, dolor abdominal, anemia, pérdida de peso involuntaria o sensación de evacuación incompleta. La urgencia depende de la intensidad de los síntomas y del contexto clínico.",
  },
  {
    q: "¿Los cambios en el hábito intestinal son síntomas de cáncer de colon?",
    a: "Pueden presentarse en el cáncer colorrectal, pero también en infecciones, estreñimiento, síndrome de intestino irritable, efectos secundarios de medicamentos y muchas otras condiciones. Los síntomas por sí solos no permiten confirmar ni descartar cáncer; la evaluación médica ayuda a identificar la causa.",
  },
  {
    q: "¿Las heces delgadas significan que tengo un tumor?",
    a: "No necesariamente. La forma de las heces puede variar por su consistencia y por otros factores digestivos. Si se vuelven persistentemente más delgadas, especialmente si el cambio es reciente o se acompaña de otros síntomas, conviene consultar para determinar si se necesitan estudios.",
  },
  {
    q: "¿Cuánto tiempo puedo esperar si tengo estreñimiento o diarrea?",
    a: "Depende de la intensidad, la evolución y los síntomas asociados. Una alteración leve y transitoria puede mejorar al corregir su causa, pero no conviene esperar si hay sangrado, pérdida de peso, anemia o dolor importante. Ante dolor abdominal intenso, desmayo o sangrado abundante, busca atención inmediata.",
  },
  {
    q: "¿Siempre necesito una colonoscopia si cambian mis evacuaciones?",
    a: "No. El médico puede determinar que son suficientes otras medidas o estudios iniciales. La colonoscopia se considera cuando los síntomas, los antecedentes o los resultados de otras pruebas justifican examinar directamente el colon.",
  },
  {
    q: "¿La sangre roja al evacuar siempre es por hemorroides?",
    a: "No. Las hemorroides y las fisuras anales son causas posibles, pero también existen otras, incluidas enfermedades inflamatorias, pólipos y cáncer colorrectal. Por eso, el sangrado nuevo o recurrente debe evaluarse y no atribuirse automáticamente a hemorroides.",
  },
  {
    q: "¿Puedo tener cáncer colorrectal aunque no tenga síntomas?",
    a: "Sí. En sus etapas iniciales, el cáncer colorrectal puede no producir síntomas. Por ello, la detección preventiva es importante para quienes cumplen los criterios correspondientes, incluso si se sienten bien.",
  },
  {
    q: "¿A qué edad debo comenzar a revisar mi colon?",
    a: "Depende de la guía clínica utilizada, los antecedentes personales y familiares y los factores de riesgo. La American Cancer Society recomienda iniciar a los 45 años la detección regular en adultos con riesgo promedio. Si tienes antecedentes familiares relevantes, pólipos previos o una enfermedad inflamatoria intestinal, la evaluación puede comenzar antes o seguir otro esquema.",
  },
  {
    q: "¿Qué especialista puede valorar estos síntomas en Puebla?",
    a: "Un médico de atención primaria o un especialista en gastroenterología o coloproctología puede iniciar la evaluación, según los síntomas. Un coloproctólogo en Puebla puede valorar problemas del colon, recto y ano, y orientar sobre los estudios que resulten pertinentes.",
  },
]

const references = [
  ["American Cancer Society (ACS). Colorectal Cancer Signs and Symptoms.", "https://www.cancer.org/cancer/types/colon-rectal-cancer/detection-diagnosis-staging/signs-and-symptoms.html"],
  ["Instituto Mexicano del Seguro Social (IMSS). Cáncer de colon y recto.", "https://www.imss.gob.mx/salud-en-linea/cancer-colon"],
  ["American Cancer Society (ACS). Colorectal Cancer Screening Recommendations.", "https://www.cancer.org/cancer/types/colon-rectal-cancer/detection-diagnosis-staging/acs-recommendations.html"],
  ["National Cancer Institute (NCI). Colon Cancer Treatment — Patient Version.", "https://www.cancer.gov/types/colorectal/patient/colon-treatment-pdq"],
  ["NIDDK. Symptoms & Causes of Constipation.", "https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/symptoms-causes"],
  ["MedlinePlus. Sangrado rectal.", "https://medlineplus.gov/spanish/ency/article/007741.htm"],
  ["American Cancer Society (ACS). Screening Tests Used to Find Colorectal Cancer.", "https://www.cancer.org/cancer/types/colon-rectal-cancer/detection-diagnosis-staging/screening-tests-used.html"],
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
        ctaTitle="¿Cambiaste tu forma habitual de evacuar?"
        ctaSubtitle="Si notas cambios persistentes en tus evacuaciones, tienes sangrado al evacuar o necesitas orientación sobre si debes estudiar el colon, una valoración médica puede ayudarte a identificar los siguientes pasos."
        reviewerNote="No todas las alteraciones intestinales requieren una colonoscopia, pero tampoco deben ignorarse los síntomas persistentes o las señales de alarma."
        summary={
          <>
            Un cambio en la frecuencia, la consistencia o la forma de las heces puede relacionarse con la alimentación, el estrés, los medicamentos o distintos trastornos digestivos. Si el cambio es <strong>nuevo, persiste o se acompaña de sangre, anemia, pérdida de peso involuntaria o dolor abdominal</strong>, conviene una valoración médica. No todas las personas con cambios intestinales necesitan colonoscopia: la edad, los antecedentes y los síntomas asociados ayudan a decidir qué estudios son apropiados.
          </>
        }
      >
        <div>
          <p className={p}>
            «Mis evacuaciones cambiaron, ¿debo preocuparme?» Es una duda frecuente y completamente válida. El objetivo no es asumir que cualquier alteración significa cáncer, sino reconocer cuándo conviene solicitar una valoración médica y en qué circunstancias puede ser necesario estudiar el colon.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué se considera un cambio en el hábito intestinal</h2>
          <p className={p}>
            El hábito intestinal es la manera habitual en que una persona evacúa: la frecuencia, la consistencia y forma de las heces, el esfuerzo necesario y la sensación de haber terminado. No todas las personas evacúan con la misma frecuencia; lo importante es conocer qué es normal para ti e identificar una diferencia nueva y persistente, como:
          </p>
          <Bullets
            items={[
              "Evacuar mucho más o mucho menos que de costumbre.",
              "Presentar diarrea o estreñimiento sin una explicación clara.",
              "Sentir que el intestino no se vacía por completo.",
              "Notar una modificación persistente en la forma o consistencia de las heces.",
              "Tener urgencia para evacuar o necesitar hacerlo repetidamente sin obtener alivio.",
              "Alternar episodios de diarrea y estreñimiento que antes no ocurrían.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Un cambio aislado después de comer algo diferente no tiene el mismo significado que una alteración que se mantiene durante días o semanas. No existe un plazo único que determine cuándo todas las personas deben realizarse una colonoscopia: la duración del síntoma es solo uno de los elementos que se consideran.
          </p>
        </div>

        <div>
          <h2 className={`${h2} mb-4`}>Frecuencia, consistencia, forma y color</h2>
          <p className={`${p} mb-4`}>
            Observar las evacuaciones aporta información útil, aunque su apariencia por sí sola no permite establecer un diagnóstico.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {stoolAspects.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={h2}>Estreñimiento de nueva aparición</h2>
          <p className={p}>
            El estreñimiento puede manifestarse como evacuaciones menos frecuentes, heces duras, esfuerzo excesivo, dolor al evacuar o sensación de evacuación incompleta. Entre sus causas habituales se encuentran:
          </p>
          <Bullets
            items={[
              "Consumir poca fibra o líquidos.",
              "Reducir la actividad física.",
              "Ignorar repetidamente las ganas de evacuar.",
              "Cambiar de rutina, viajar o modificar los horarios de alimentación.",
              "Tomar medicamentos que favorecen el estreñimiento, como algunos analgésicos opioides, suplementos de hierro o ciertos antiácidos.",
              "Presentar alteraciones funcionales del intestino o del suelo pélvico.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Cuando el estreñimiento aparece de forma reciente y sin una causa evidente, especialmente en alguien que antes evacuaba con normalidad, conviene prestar atención a su evolución. La valoración es particularmente importante si se acompaña de sangre en las heces, anemia, pérdida de peso involuntaria, dolor abdominal persistente o antecedentes familiares relevantes. No todos los casos requieren colonoscopia.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 mt-4">
            <p className="font-bold text-red-700 text-sm sm:text-base mb-1">¿Cuándo es urgente?</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Si el estreñimiento se acompaña de dolor abdominal intenso, vómitos, distensión importante o incapacidad para expulsar gases, acude a urgencias para descartar una obstrucción u otro problema agudo.
            </p>
          </div>
        </div>

        <div>
          <h2 className={h2}>Diarrea persistente: qué puede provocarla y cuándo investigarla</h2>
          <p className={p}>
            La diarrea consiste en evacuar heces sueltas o acuosas con mayor frecuencia de la habitual. Puede resolverse en pocos días, pero también prolongarse o repetirse. Las causas posibles incluyen:
          </p>
          <Bullets
            items={[
              "Infecciones intestinales por virus, bacterias o parásitos.",
              "Intolerancias alimentarias.",
              "Efectos secundarios de medicamentos, incluidos algunos antibióticos.",
              "Síndrome de intestino irritable.",
              "Enfermedad celíaca y otros trastornos de absorción.",
              "Enfermedades inflamatorias intestinales, como la colitis ulcerosa o la enfermedad de Crohn.",
            ]}
          />
          <p className={`${p} mt-4`}>
            Una diarrea que dura cuatro semanas o más suele clasificarse como crónica, pero no es necesario esperar ese tiempo si existen señales de alarma. La presencia de sangre, fiebre importante, dolor intenso, deshidratación, debilidad marcada o pérdida de peso requiere una valoración más pronta. Según el caso, pueden indicarse análisis de sangre, pruebas de heces o estudios del colon.
          </p>
        </div>

        <div>
          <h2 className={h2}>Heces más delgadas de lo habitual</h2>
          <p className={p}>
            Notar evacuaciones más estrechas suele generar preocupación por su asociación con los tumores del colon. Sin embargo, <strong>la forma de las heces por sí sola no confirma ni descarta cáncer colorrectal</strong>. El diámetro puede variar por la consistencia, el estreñimiento y los cambios en el tránsito intestinal; en algunos casos, una alteración persistente puede relacionarse con un estrechamiento del intestino que necesita evaluación.
          </p>
          <p className={`${p} mt-3`}>Conviene consultar si las heces se mantienen más delgadas sin explicación clara, sobre todo si aparece junto con:</p>
          <Bullets
            items={[
              "Sangrado rectal o sangre mezclada con las heces.",
              "Sensación persistente de evacuación incompleta.",
              "Dolor abdominal recurrente.",
              "Estreñimiento o diarrea de nueva aparición.",
              "Anemia o pérdida de peso involuntaria.",
            ]}
          />
        </div>

        <div>
          <h2 className={h2}>Sangre, anemia, pérdida de peso y dolor: por qué importa el contexto</h2>
          <h3 className={h3}>Sangre en las heces</h3>
          <p className={p}>
            La sangre roja puede proceder de una fisura anal, hemorroides, inflamación, pólipos u otras causas. Las heces negras y alquitranosas pueden indicar sangrado en una parte más alta del aparato digestivo. No es correcto atribuir automáticamente el sangrado a hemorroides, incluso si ya las has presentado antes. Lee más en{" "}
            <Link href="/blog/sangrado-al-evacuar-causas" className={link}>Sangrado al evacuar: causas posibles y cuándo preocuparte</Link>.
          </p>
          <h3 className={h3}>Anemia o cansancio inusual</h3>
          <p className={p}>
            La anemia por deficiencia de hierro sin causa identificada puede relacionarse con pérdidas de sangre digestivas que no siempre son visibles. No significa necesariamente cáncer, pero puede justificar investigar el aparato digestivo.
          </p>
          <h3 className={h3}>Pérdida de peso involuntaria</h3>
          <p className={p}>
            Bajar de peso sin proponérselo puede relacionarse con diversas enfermedades o problemas de absorción. Si ocurre junto con cambios intestinales persistentes, requiere valoración médica.
          </p>
          <h3 className={h3}>Dolor abdominal</h3>
          <p className={p}>
            Puede deberse a gases, estreñimiento o infecciones. Si es recurrente, no mejora, se intensifica o se acompaña de alteraciones en las evacuaciones, es importante determinar su causa.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-lg">⚠️</span>
            <p className="font-bold text-red-700 text-base sm:text-lg">Acude a urgencias si presentas:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "Sangrado rectal abundante o continuo",
              "Desmayo, debilidad intensa o confusión, especialmente con sangrado",
              "Dolor abdominal intenso, repentino o con abdomen muy distendido",
              "Incapacidad para evacuar o expulsar gases, con vómitos o dolor",
              "Heces negras y alquitranosas con mareo o debilidad",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2"><span className="text-red-500">❌</span><p className="text-sm sm:text-base text-gray-700">{item}</p></div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">No esperes a conseguir una consulta programada ni a realizarte estudios por tu cuenta.</p>
        </div>

        <div>
          <h2 className={`${h2} mb-4`}>Causas frecuentes: alimentación, medicamentos, infecciones y más</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-gray-900">
                <tr>
                  <th className="p-3 sm:p-4 font-bold">Posible causa</th>
                  <th className="p-3 sm:p-4 font-bold">Cómo puede afectar las evacuaciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {commonCauses.map(([cause, effect]) => (
                  <tr key={cause}>
                    <td className="p-3 sm:p-4 font-medium text-gray-900 align-top">{cause}</td>
                    <td className="p-3 sm:p-4 align-top">{effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${p} mt-4`}>
            Estas posibilidades no son excluyentes. Si sospechas que un medicamento está provocando cambios en tus evacuaciones, informa al médico que lo indicó y <strong>no suspendas tratamientos prescritos por tu cuenta</strong>.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cuándo considerar una valoración por coloproctología</h2>
          <p className={p}>Un coloproctólogo evalúa enfermedades del colon, el recto y el ano. Considera solicitar una valoración si:</p>
          <Bullets
            items={[
              "El estreñimiento o la diarrea representan un cambio claro respecto a tu patrón habitual.",
              "Presentas sangre en las heces o sangrado al evacuar.",
              "Notas una modificación persistente en la forma de las heces.",
              "Tienes sensación frecuente de evacuación incompleta.",
              "Presentas dolor anal, abdominal o rectal recurrente.",
              "Se ha identificado anemia sin una explicación clara.",
              "Has perdido peso involuntariamente.",
              "Tienes antecedentes personales o familiares que aumentan el riesgo de enfermedades colorrectales.",
              "Necesitas orientación sobre la detección preventiva del cáncer colorrectal.",
            ]}
          />
          <p className={`${p} mt-4`}>
            No es necesario tener todos estos síntomas para acudir a consulta, ni significa que quien los presenta tenga cáncer. Una evaluación oportuna ayuda a establecer si el problema puede tratarse de forma conservadora o si requiere pruebas adicionales.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué estudios pueden indicarse y cuándo se considera una colonoscopia</h2>
          <p className={p}>No existe un único estudio adecuado para todas las personas. La elección depende de los síntomas, su duración, los antecedentes, la exploración física y la sospecha clínica.</p>
          <Bullets
            items={[
              <><strong>Historia clínica y exploración física:</strong> permiten conocer cómo comenzaron los síntomas y buscar hallazgos que orienten el diagnóstico.</>,
              <><strong>Análisis de sangre:</strong> pueden ayudar a identificar anemia, signos de inflamación u otras alteraciones.</>,
              <><strong>Estudios de heces:</strong> útiles para investigar infecciones, inflamación o sangre no visible.</>,
              <><strong>Exploración anorrectal:</strong> cuando hay dolor anal, sangrado u otros síntomas de esa región.</>,
              <><strong>Estudios de imagen:</strong> en determinadas situaciones, para evaluar problemas abdominales o complicaciones.</>,
              <><strong>Colonoscopia:</strong> permite examinar el interior del colon y el recto mediante un instrumento flexible con cámara.</>,
            ]}
          />
          <h3 className={h3}>¿Cuándo hacer una colonoscopia?</h3>
          <p className={p}>
            Puede considerarse ante cambios intestinales persistentes sin explicación clara, sangrado rectal, anemia por deficiencia de hierro sin causa identificada, sospecha de enfermedad inflamatoria, determinados antecedentes familiares o resultados anormales de otras pruebas. Durante el procedimiento, el médico puede tomar biopsias o retirar determinados pólipos.
          </p>
          <p className={`${p} mt-3`}>
            En cambio, una alteración leve y pasajera, sin otros síntomas ni factores de riesgo, no conduce automáticamente a una colonoscopia. La decisión debe responder a una pregunta clínica concreta.
          </p>
        </div>

        <div>
          <h2 className={h2}>Estudiar síntomas no es lo mismo que la detección preventiva</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Estudio diagnóstico</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Se realiza cuando existen síntomas, signos clínicos o resultados anormales que necesitan explicación, como sangrado rectal, anemia inexplicada o cambios persistentes en el hábito intestinal.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Detección preventiva (cribado)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Se ofrece a personas sin síntomas para buscar señales tempranas de cáncer colorrectal o lesiones precancerosas, según su edad, antecedentes y nivel de riesgo.</p>
            </div>
          </div>
          <p className={`${p} mt-4`}>
            Como referencia internacional, la American Cancer Society recomienda que los adultos con riesgo promedio comiencen la detección regular a los 45 años; las personas con riesgo elevado pueden necesitar comenzar antes. Esta recomendación no debe interpretarse como una regla universal para todas las personas en México. Si una prueba de detección distinta de la colonoscopia resulta positiva, normalmente se requiere una colonoscopia de seguimiento.
          </p>
        </div>

        <div>
          <h2 className={h2}>Factores de riesgo que conviene comunicar al médico</h2>
          <Bullets
            items={[
              <><strong>Antecedentes familiares:</strong> familiares cercanos con cáncer colorrectal o ciertos pólipos, especialmente si el diagnóstico fue a edad temprana.</>,
              <><strong>Antecedentes personales:</strong> pólipos colorrectales previos o cáncer colorrectal.</>,
              <><strong>Enfermedades inflamatorias intestinales:</strong> colitis ulcerosa o enfermedad de Crohn que afecte el colon.</>,
              <><strong>Síndromes hereditarios:</strong> por ejemplo, síndrome de Lynch o poliposis adenomatosa familiar.</>,
              <><strong>Edad:</strong> el riesgo aumenta con la edad, aunque la enfermedad también puede presentarse en personas jóvenes.</>,
              <><strong>Estilo de vida:</strong> sedentarismo, exceso de peso, tabaquismo y consumo de carnes procesadas.</>,
            ]}
          />
          <p className={`${p} mt-4`}>
            Si un familiar tuvo cáncer colorrectal, procura saber qué parentesco tenía contigo, a qué edad recibió el diagnóstico y si hubo otros casos en la familia. Estos datos pueden modificar cuándo comenzar la detección.
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Qué información llevar a la consulta</h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            {[
              "Fecha aproximada en que comenzaron los cambios intestinales.",
              "Frecuencia habitual de evacuación y cómo ha cambiado.",
              "Consistencia, forma y color de las heces.",
              "Presencia de sangre, moco, dolor o sensación de evacuación incompleta.",
              "Cambios recientes de alimentación, hidratación o rutina.",
              "Medicamentos y suplementos que utilizas.",
              "Episodios recientes de diarrea, fiebre o infecciones digestivas.",
              "Pérdida de peso, cansancio inusual o anemia conocida.",
              "Antecedentes personales de pólipos, enfermedades intestinales o estudios previos.",
              "Antecedentes familiares de cáncer colorrectal o pólipos y edad del diagnóstico.",
            ].map((item) => (
              <p key={item}>☐ {item}</p>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">Si ya tienes análisis, colonoscopias o biopsias previas, lleva los resultados. Si presentas señales de alarma, no esperes a reunir esta información para pedir una consulta.</p>
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
