import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "cuanto-duele-cirugia-hemorroides")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "miedo", label: "Por qué da tanto miedo la cirugía de hemorroides" },
  { id: "de-donde-viene", label: "De dónde viene el dolor" },
  { id: "primera-evacuacion", label: "La primera evacuación: el momento que más preocupa" },
  { id: "como-se-trata", label: "Cómo se controla el dolor en la práctica" },
  { id: "cuanto-dura", label: "Cuánto dura la molestia" },
  { id: "cuando-acudir", label: "Señales de que el dolor no es normal" },
  { id: "vale-la-pena", label: "¿Vale la pena el proceso?" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
  { id: "temas-relacionados", label: "Temas relacionados" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Duele más la cirugía o lo que tengo ahora?",
    respuesta:
      "Son dolores distintos. El de la cirugía es intenso al principio pero va disminuyendo y tiene fecha de término. El de una enfermedad hemorroidal avanzada no cede y se repite indefinidamente. Es la comparación que la mayoría de los pacientes hace después, y casi siempre en el mismo sentido.",
  },
  {
    pregunta: "¿Me van a dormir por completo?",
    respuesta:
      "El tipo de anestesia se define en la valoración preoperatoria, según la técnica que se vaya a emplear y tu estado de salud. Durante el procedimiento no vas a sentir dolor: esa parte está resuelta.",
  },
  {
    pregunta: "¿Cuántos días de incapacidad voy a necesitar?",
    respuesta:
      "Depende de la técnica empleada y del tipo de trabajo que realizas. Es un dato que se define en la valoración preoperatoria, no antes: cualquier cifra dada sin explorarte es una suposición.",
  },
  {
    pregunta: "¿Puedo tomar algo para el dolor por mi cuenta?",
    respuesta:
      "El esquema de analgesia te lo indica tu médico y conviene seguirlo tal cual, incluidos los horarios. Agregar medicamentos por cuenta propia puede interferir con lo indicado, sobre todo si tomas anticoagulantes o antiinflamatorios.",
  },
  {
    pregunta: "¿Y si el dolor no baja como me dijeron?",
    respuesta:
      "Avisa a tu médico. El dolor postoperatorio tiene un curso esperado, y salirse de ese curso es justamente el dato que permite detectar una complicación a tiempo. No lo aguantes ni esperes a la cita de control.",
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
        fechaModificacion="2026-09-09"
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
        relacionadosDe={post.category}
        slug={post.slug}
        tema="la cirugía de hemorroides"
        ctaTitle="¿Tienes dudas sobre tu caso específico?"
        ctaSubtitle="Agenda una valoración confidencial. Sin compromiso, sin juicios."
        reviewerNote="Los tiempos de recuperación varían por técnica y por paciente; se definen en la valoración preoperatoria."
        summary={
          <>
            La cirugía de hemorroides <strong>sí genera molestia</strong>, pero no es el dolor insoportable que muchas personas imaginan. El dolor viene sobre todo de la zona donde se opera, que tiene inervación completa, y del espasmo del esfínter. Con un manejo correcto de la analgesia y del hábito intestinal, se vuelve manejable.
          </>
        }
      >
        <div>
          <h2 id="miedo" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Por qué da tanto miedo la cirugía de hemorroides
          </h2>
          <p className="text-gray-700">
            Si le preguntas a alguien que se operó hace veinte años, es probable que escuches una historia dura. Ese relato circula, se repite en la familia y termina pesando más que cualquier explicación médica.
          </p>
          <p className="text-gray-700 mt-3">
            La cirugía proctológica ha cambiado desde entonces, y el manejo del dolor postoperatorio también. Pero el miedo heredado sigue vivo, y en consulta se nota: buena parte de los pacientes que llegan a un coloproctólogo en Puebla llevan años posponiendo la decisión por una historia que oyeron, no por lo que les dijo un médico.
          </p>
          <p className="text-gray-700 mt-3">
            Vale la pena separar las dos cosas. Que duela no es lo mismo que ser insoportable, y ninguna de las dos afirmaciones sirve si no se explica de dónde viene el dolor.
          </p>
        </div>

        <div>
          <h2 id="de-donde-viene" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            De dónde viene el dolor
          </h2>
          <p className="text-gray-700 mb-4">
            Entender el origen ayuda más que cualquier cifra, porque explica por qué funcionan las medidas que se indican después.
          </p>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">La zona tiene inervación completa</h3>
              <p className="text-gray-700">
                Buena parte de la cirugía ocurre por debajo de la línea dentada, en tejido con terminaciones nerviosas de dolor. Es la misma razón por la que las hemorroides externas duelen y las internas no.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">El esfínter entra en espasmo</h3>
              <p className="text-gray-700">
                El músculo responde a la agresión contrayéndose. Ese espasmo aporta una parte importante del dolor y, además, reduce el flujo de sangre a la herida, lo que retrasa la cicatrización.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Es una zona que no descansa</h3>
              <p className="text-gray-700">
                A diferencia de una herida en un brazo, esta se moviliza al sentarse, al caminar y al evacuar. Por eso el manejo del hábito intestinal es parte del tratamiento del dolor, no un detalle aparte.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Qué técnica corresponde a tu caso depende del grado en que estén tus{" "}
            <Link href="/blog/hemorroides-guia-completa" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              hemorroides
            </Link>
            , y eso solo se determina con una exploración presencial. No todas las cirugías de hemorroides son la misma operación.
          </p>
        </div>

        <div>
          <h2 id="primera-evacuacion" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            La primera evacuación: el momento que más preocupa
          </h2>
          <p className="text-gray-700">
            Es la pregunta que más se repite en consulta, y con razón: no es el dolor de la herida en reposo lo que la mayoría recuerda, sino el de la primera evacuación después de la cirugía.
          </p>
          <p className="text-gray-700 mt-3">
            La buena noticia es que ese momento es, en gran medida, controlable. Depende de que la evacuación llegue blanda, y eso se prepara desde antes de la cirugía con fibra, hidratación y lo que tu médico te indique.
          </p>
          <p className="text-gray-700 mt-3">
            El error más común es el contrario: aguantarse por miedo. La materia fecal retenida se endurece, y la evacuación que finalmente ocurre duele mucho más que la que se hubiera tenido a tiempo. <strong>Postergarla empeora exactamente lo que se quiere evitar.</strong>
          </p>
        </div>

        <TreatmentBlock titulo="Cómo se controla el dolor en la práctica">
          <p>
            <strong>Analgesia programada, no a demanda.</strong> Tomar el medicamento a horas fijas evita que el dolor se acumule. Esperar a que duela para tomarlo es lo que hace que el postoperatorio se recuerde mal.
          </p>
          <p>
            <strong>Baños de asiento con agua tibia.</strong> Relajan el esfínter, que es la parte del dolor que más incomoda, y mejoran la irrigación de la herida.
          </p>
          <p>
            <strong>Manejo del estreñimiento.</strong> Fibra, hidratación y lo que se te indique. Es la medida con mayor impacto sobre cómo se vive la recuperación.
          </p>
          <p>
            <strong>Anestesia adecuada durante el procedimiento.</strong> El tipo se define en la valoración preoperatoria, según la técnica y tu estado de salud.
          </p>
        </TreatmentBlock>

        <div>
          <h2 id="cuanto-dura" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Cuánto dura la molestia
          </h2>
          <p className="text-gray-700">
            Aquí conviene ser honesto en vez de tranquilizador: <strong>no hay un número único.</strong> La duración depende de la técnica empleada, de la extensión de lo que se tuvo que resolver y de qué tan bien se controle el hábito intestinal en los días siguientes.
          </p>
          <p className="text-gray-700 mt-3">
            Lo que sí es constante es la forma de la curva. La molestia es mayor al principio y va cediendo; no aparece de nuevo ni aumenta con los días. Ese patrón es el que importa, y salirse de él es señal de que algo requiere revisión.
          </p>
          <p className="text-gray-700 mt-3">
            El tiempo estimado para tu caso, incluida la incapacidad laboral, se define en la valoración preoperatoria. Desconfía de cualquier cifra que te den sin haberte explorado, incluida la de internet.
          </p>
        </div>

        <RedFlags
          titulo="Señales de que el dolor no es normal"
          intro="Contacta a tu médico sin esperar a la cita de control si presentas:"
          senales={[
            "Dolor que aumenta en lugar de disminuir conforme pasan los días",
            "Fiebre o escalofríos",
            "Sangrado abundante o que aumenta",
            "Secreción con mal olor o salida de pus",
            "Dolor que no responde al esquema de analgesia indicado",
            "Imposibilidad de orinar",
          ]}
        />

        <div>
          <h2 id="vale-la-pena" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            ¿Vale la pena el proceso?
          </h2>
          <p className="text-gray-700">
            La mayoría de los pacientes que llegan a consulta llevan años postergando la decisión por vergüenza, miedo o desinformación.
          </p>
          <p className="text-gray-700 mt-3">
            La comparación honesta no es entre operarse y no tener nada. Es entre un malestar temporal, con fecha de término y manejable, y un cuadro que no cede y que se repite indefinidamente. Puesto así, la conversación cambia.
          </p>
          <p className="text-gray-700 mt-3">
            Vale la pena aclarar algo más: <strong>no toda enfermedad hemorroidal termina en quirófano.</strong> Buena parte se resuelve con manejo conservador o con un procedimiento de consultorio. Si aún no sabes qué te corresponde, revisa las{" "}
            <Link href="/blog/hemorroides-tratamiento-puebla" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              opciones de tratamiento disponibles en Puebla
            </Link>{" "}
            antes de asumir que la cirugía es tu único camino.
          </p>
        </div>
      </BlogPostLayout>
    </>
  )
}
