import type { Metadata } from "next"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "colonoscopia-que-es-como-prepararse")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "que-es", label: "Qué es y para qué sirve" },
  { id: "quien", label: "Quién debe hacérsela" },
  { id: "como-se-trata", label: "La preparación paso a paso" },
  { id: "dieta", label: "La dieta de los días previos" },
  { id: "dia-del-estudio", label: "El día del estudio" },
  { id: "durante", label: "Durante el estudio" },
  { id: "despues", label: "Después: qué esperar" },
  { id: "riesgos", label: "Riesgos reales" },
  { id: "cuando-acudir", label: "Cuándo no esperar al tamizaje" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
  { id: "temas-relacionados", label: "Temas relacionados" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Duele la colonoscopia?",
    respuesta:
      "El estudio se realiza bajo sedación, así que el paciente no percibe el procedimiento. La molestia real de una colonoscopia está en la preparación del día previo, no en el estudio en sí. Es la confusión más frecuente y la que más gente aplaza sin razón.",
  },
  {
    pregunta: "¿Cuánto dura?",
    respuesta:
      "El estudio en sí toma un rato relativamente corto. Considera más tiempo en total por la preparación previa a la sedación y por la recuperación posterior, antes de que puedas irte a casa.",
  },
  {
    pregunta: "¿Puedo manejar después?",
    respuesta:
      "No. La sedación impide manejar durante el resto del día, aunque te sientas despierto. Necesitas que alguien te acompañe y te lleve a casa. Es un requisito, no una recomendación.",
  },
  {
    pregunta: "¿Y si encuentran un pólipo?",
    respuesta:
      "Si es factible, se extirpa durante el mismo estudio y se envía a analizar. Ahí está el valor real de la colonoscopia: es el único estudio que detecta y trata en el mismo momento, quitando la lesión antes de que pueda evolucionar.",
  },
  {
    pregunta: "¿Cada cuánto se repite?",
    respuesta:
      "Depende de lo que se haya encontrado y de tus antecedentes. Un estudio normal sin factores de riesgo se repite con un intervalo largo; si se encontraron pólipos, el intervalo se acorta. El médico define la periodicidad al entregarte el resultado.",
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
        condicion="Tamizaje de cáncer colorrectal"
        faqs={faqs}
      />
      <BlogPostLayout
        category={post.category}
        title={post.title}
        dateLabel={post.dateLabel}
        readTime={post.readTime}
        toc={toc}
        faqs={faqs}
        relacionadosDe={post.category}
        slug={post.slug}
        tema="la colonoscopia"
        ctaTitle="Agenda tu colonoscopia con un especialista"
        ctaSubtitle="Es el único estudio que detecta y trata en el mismo momento. La valoración previa es breve y resuelve todas tus dudas sobre la preparación."
        reviewerNote="Las indicaciones exactas de preparación te las entrega el médico según tu caso."
        summary={
          <>
            La colonoscopia es un estudio que permite ver el interior del colon completo, tomar biopsias y extirpar pólipos en el mismo momento. Se realiza bajo sedación: <strong>el paciente no percibe el procedimiento.</strong> La parte incómoda es la preparación del día previo, y de ella depende que el estudio sirva.
          </>
        }
      >
        <div>
          <h2 id="que-es" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué es y para qué sirve
          </h2>
          <p className="text-gray-700">
            La colonoscopia consiste en introducir un tubo flexible con una cámara para recorrer el colon desde el recto hasta su inicio. La imagen se ve en tiempo real.
          </p>
          <p className="text-gray-700 mt-3">
            Lo que la distingue de cualquier otro estudio del colon es que no solo mira: <strong>puede intervenir en el mismo acto</strong>. Si aparece un pólipo, se extirpa ahí mismo y se manda a analizar. Si hay una lesión dudosa, se toma biopsia.
          </p>
          <p className="text-gray-700 mt-3">
            Esa capacidad es la razón por la que el cáncer de colon es de los pocos que se pueden prevenir, no solo detectar. Se quita la lesión precursora antes de que llegue a ser un tumor. Es también el motivo por el que vale la pena hacerla con un coloproctólogo en Puebla y no posponerla.
          </p>
        </div>

        <div>
          <h2 id="quien" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Quién debe hacérsela
          </h2>
          <p className="text-gray-700 mb-3">Hay dos situaciones distintas, y conviene no confundirlas.</p>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Por tamizaje, sin síntomas</h3>
              <p className="text-gray-700">
                Se hace para buscar lesiones antes de que den molestias, en personas que se sienten sanas. Las guías actuales sitúan el inicio del tamizaje alrededor de los 45 años en personas sin factores de riesgo. Con antecedente familiar de cáncer de colon o de pólipos, se empieza antes: la edad exacta la define el médico según tu historia.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Por síntomas</h3>
              <p className="text-gray-700">
                Aquí no hay edad de corte. Sangrado que no se explica con lo encontrado en la exploración, cambio del hábito intestinal de más de tres semanas, anemia sin causa clara o pérdida de peso involuntaria son indicaciones por sí mismas. En esos casos el estudio no se pospone hasta cumplir la edad de tamizaje.
              </p>
            </div>
          </div>
        </div>

        <TreatmentBlock titulo="La preparación paso a paso">
          <p>
            La preparación es la parte que más inquieta al paciente, y de ella depende por completo que el estudio sirva. Un colon mal preparado obliga a repetirlo: si queda residuo, una lesión pequeña puede quedar oculta detrás.
          </p>
          <p>
            Consiste en vaciar el colon por completo mediante una solución que se toma según un esquema horario, acompañada de ajustes en la dieta los días previos.
          </p>
          <p>
            <strong>El esquema exacto —qué solución, en qué horario y con qué ajustes— te lo indica el médico</strong>, porque depende del horario de tu estudio y de los medicamentos que tomes. No lo tomes de internet ni de la experiencia de un conocido.
          </p>
          <p>
            Lo que sí conviene saber de antemano: produce evacuaciones líquidas repetidas durante varias horas. Planea quedarte en casa, cerca de un baño, y no agendes nada esa tarde.
          </p>
        </TreatmentBlock>

        <div>
          <h2 id="dieta" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            La dieta de los días previos
          </h2>
          <p className="text-gray-700 mb-3">
            El principio general es reducir el residuo que queda en el colon. Tu médico te dará las indicaciones precisas, pero la lógica es esta:
          </p>
          <ul className="space-y-2">
            {[
              "Se reducen los alimentos con fibra y residuo: verduras crudas, cáscaras, semillas, granos enteros.",
              "Se privilegian alimentos de fácil digestión y bajo residuo.",
              "El último tramo antes del estudio se hace con líquidos claros.",
              "Se evitan los líquidos con colorante rojo o morado, porque pueden confundirse con sangre durante el estudio.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            Un punto que se pasa por alto: <strong>avisa qué medicamentos tomas</strong>, sobre todo anticoagulantes, antiagregantes, hierro o medicamentos para diabetes. Algunos requieren ajuste días antes, y ese ajuste lo indica el médico.
          </p>
        </div>

        <div>
          <h2 id="dia-del-estudio" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            El día del estudio
          </h2>
          <ul className="space-y-2">
            {[
              "Acude en ayuno, según las horas que se te hayan indicado.",
              "Ve acompañado. Es obligatorio: la sedación te impide manejar y necesitas quien te lleve a casa.",
              "Lleva ropa cómoda y deja en casa objetos de valor.",
              "Lleva tus estudios previos y la lista de medicamentos que tomas.",
              "No planees actividades después. El resto del día es de reposo.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id="durante" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Durante el estudio
          </h2>
          <p className="text-gray-700">
            Se coloca una vía para administrar la sedación. A partir de ahí, el paciente no percibe el procedimiento.
          </p>
          <p className="text-gray-700 mt-3">
            La posición es de lado, con las rodillas flexionadas. Durante el recorrido se insufla aire o dióxido de carbono para separar las paredes del colon y poder ver bien. Esa es la razón de la distensión que algunos notan al despertar.
          </p>
          <p className="text-gray-700 mt-3">
            Si aparece un pólipo, se extirpa en ese momento. Si hay una zona sospechosa, se biopsia. Todo eso ocurre sin que el paciente lo perciba.
          </p>
        </div>

        <div>
          <h2 id="despues" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Después: qué esperar
          </h2>
          <p className="text-gray-700 mb-3">
            Se pasa un rato en recuperación hasta que la sedación cede. Después:
          </p>
          <ul className="space-y-2">
            {[
              "Es normal sentir distensión abdominal y expulsar gases. Es el aire del estudio y cede solo.",
              "Puede haber manchado escaso de sangre si se tomó biopsia o se quitó un pólipo.",
              "Se reanuda la alimentación según lo que te indiquen.",
              "El resto del día es de reposo: nada de manejar, firmar documentos importantes ni tomar decisiones que requieran concentración.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            El hallazgo visual se comenta el mismo día. Si se tomaron muestras, el resultado del análisis tarda más y se revisa en una consulta posterior, donde se define la periodicidad de tu seguimiento.
          </p>
        </div>

        <div>
          <h2 id="riesgos" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Riesgos reales
          </h2>
          <p className="text-gray-700">
            La colonoscopia es un procedimiento seguro, pero es un procedimiento, no un trámite. Las complicaciones son poco frecuentes y conviene conocerlas: sangrado en el sitio donde se quitó un pólipo, perforación del colon, y las asociadas a la sedación.
          </p>
          <p className="text-gray-700 mt-3">
            Se reducen cuando el estudio lo realiza personal capacitado, en un lugar con condiciones adecuadas, y cuando el paciente informó correctamente sus antecedentes y medicamentos. Ese último punto depende de ti.
          </p>
          <p className="text-gray-700 mt-3">
            Al elegir dónde hacerte una colonoscopia en Puebla, vale la pena preguntar quién realiza el estudio, con qué equipo y en qué instalaciones. Es una pregunta legítima y cualquier especialista debería responderla sin incomodarse.
          </p>
        </div>

        <RedFlags
          titulo="Cuándo no esperar al tamizaje"
          intro="Acude a valoración sin importar tu edad si presentas:"
          senales={[
            "Sangrado que no se explica con la exploración proctológica",
            "Cambio en el hábito intestinal de más de tres semanas",
            "Heces delgadas o en forma de listón",
            "Pérdida de peso involuntaria",
            "Anemia sin causa identificada",
            "Sensación persistente de no vaciar completamente el recto",
            "Antecedente familiar de cáncer de colon o pólipos",
          ]}
        />
      </BlogPostLayout>
    </>
  )
}
