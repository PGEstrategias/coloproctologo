import type { Metadata } from "next"
import Link from "next/link"

import ArticleSchema, { type ArticleFaq } from "@/components/blog/article-schema"
import type { TocItem } from "@/components/blog/article-toc"
import BlogPostLayout from "@/components/blog/blog-post-layout"
import RedFlags from "@/components/blog/red-flags"
import TreatmentBlock from "@/components/blog/treatment-block"
import { blogPosts } from "@/lib/blog-posts"

const post = blogPosts.find((p) => p.slug === "hemorroides-tratamiento-puebla")!

export const metadata: Metadata = {
  title: { absolute: post.seoTitle },
  description: post.description,
}

const toc: TocItem[] = [
  { id: "opciones", label: "Qué opciones existen hoy" },
  { id: "conservador", label: "Manejo conservador: qué sí funciona" },
  { id: "ligadura", label: "Ligadura con banda elástica" },
  { id: "cirugia", label: "Cirugía: cuándo es la única salida" },
  { id: "como-se-trata", label: "Cómo se decide tu tratamiento" },
  { id: "cuando-acudir", label: "Cuándo no esperar más" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
]

const faqs: ArticleFaq[] = [
  {
    pregunta: "¿Sirven las pomadas?",
    respuesta:
      "Alivian el síntoma mientras se usan: reducen inflamación y molestia. No corrigen la dilatación de la hemorroide ni la causa que la produjo, así que el alivio dura lo que dura el tratamiento. Usarlas durante meses sin diagnóstico es lo que hace que un cuadro llegue tarde a consulta.",
  },
  {
    pregunta: "¿Cuánto dura la ligadura con banda elástica?",
    respuesta:
      "El procedimiento en sí toma pocos minutos y se realiza en consultorio, sin anestesia general. Puede requerir más de una sesión según cuántos paquetes hemorroidales haya que tratar.",
  },
  {
    pregunta: "¿Necesito hospitalizarme?",
    respuesta:
      "Depende del tratamiento. Los procedimientos de consultorio no requieren hospitalización. La cirugía se realiza en quirófano y las condiciones se definen en la valoración preoperatoria, según la técnica y tu estado de salud.",
  },
  {
    pregunta: "¿Lo cubre mi seguro?",
    respuesta:
      "Depende de tu póliza y de si el padecimiento es preexistente. Lleva los datos de tu aseguradora a la consulta para revisarlo antes de programar cualquier procedimiento.",
  },
  {
    pregunta: "¿Cuándo puedo volver a trabajar?",
    respuesta:
      "Varía según el tratamiento que se te indique y el tipo de trabajo que realizas. Se define en la valoración, no antes: es un dato que depende de tu caso concreto.",
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
        tema="el tratamiento de hemorroides"
        ctaTitle="No tienes que vivir con esto"
        ctaSubtitle="La mayoría de los casos se resuelven sin cirugía cuando se atienden a tiempo. La valoración es discreta y toma menos de 30 minutos."
        summary={
          <>
            El tratamiento de hemorroides no es uno solo: va del ajuste de hábitos a un procedimiento de consultorio o a cirugía, y lo que corresponde depende del grado. <strong>Lo que define la decisión es la exploración, no la intensidad del síntoma.</strong> Un grado bajo mal manejado avanza; un grado alto no cede con pomada.
          </>
        }
      >
        <div>
          <h2 id="opciones" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Qué opciones existen hoy
          </h2>
          <p className="text-gray-700">
            Cuando alguien busca tratamiento para hemorroides en Puebla suele imaginar dos escenarios: la pomada de la farmacia o el quirófano. En realidad hay un rango, y la mayoría de los pacientes se resuelve en la parte intermedia.
          </p>
          <p className="text-gray-700 mt-3">
            Las opciones se ordenan así, de menor a mayor intervención:
          </p>
          <ul className="space-y-2 mt-3">
            {[
              "Manejo conservador: fibra, hidratación, reeducación del hábito evacuatorio y tratamiento tópico.",
              "Procedimientos de consultorio: ligadura con banda elástica.",
              "Cirugía en quirófano, cuando el grado lo exige.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            Cuál te toca no lo decide la molestia que sientes, sino el grado en que están tus{" "}
            <Link href="/blog/hemorroides-guia-completa" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              hemorroides
            </Link>
            . Por eso el primer paso siempre es la exploración.
          </p>
        </div>

        <div>
          <h2 id="conservador" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Manejo conservador: qué sí funciona
          </h2>
          <p className="text-gray-700 mb-4">
            Es el tratamiento de los grados I y II, y acompaña a todos los demás. No es &ldquo;no hacer nada&rdquo;: es corregir lo que está congestionando la hemorroide.
          </p>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Fibra e hidratación</h3>
              <p className="text-gray-700">
                Ablandar la evacuación elimina el pujo, que es el factor que más congestiona el tejido. Es la medida con mayor impacto y la que más se descuida.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Reeducación del hábito evacuatorio</h3>
              <p className="text-gray-700">
                Ir al baño cuando hay urgencia real, no por rutina. Y salir del inodoro al terminar: el celular en el baño alarga el tiempo sentado y aumenta la congestión venosa.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">Tratamiento tópico</h3>
              <p className="text-gray-700">
                Controla la inflamación y la molestia durante el episodio agudo. Es un apoyo, no el tratamiento: por sí solo no revierte una hemorroide dilatada.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Si el cuadro cede con esto y no vuelve, no hace falta más. Si vuelve, el manejo conservador no fue el error: fue insuficiente para el grado que tienes.
          </p>
        </div>

        <div>
          <h2 id="ligadura" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Ligadura con banda elástica
          </h2>
          <p className="text-gray-700">
            Es el procedimiento de consultorio más frecuente para hemorroides internas que sangran o se salen y no ceden con manejo conservador.
          </p>
          <p className="text-gray-700 mt-3">
            Consiste en colocar una banda en la base del paquete hemorroidal para interrumpir su irrigación. El tejido se desprende solo en los días siguientes. Se realiza sin anestesia general y toma pocos minutos.
          </p>
          <p className="text-gray-700 mt-3">
            Se hace por arriba de la línea dentada, en la zona sin terminaciones nerviosas de dolor. Por eso se tolera en consultorio: no se liga tejido con sensibilidad dolorosa.
          </p>
          <p className="text-gray-700 mt-3">
            No sirve para hemorroides externas ni para un grado IV. Ahí la indicación es otra.
          </p>
        </div>

        <div>
          <h2 id="cirugia" className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Cirugía: cuándo es la única salida
          </h2>
          <p className="text-gray-700 mb-3">La cirugía se plantea cuando:</p>
          <ul className="space-y-2">
            {[
              "El grado es IV, es decir, la hemorroide está permanentemente fuera y no se puede reintroducir.",
              "Un grado III no respondió a procedimientos de consultorio.",
              "Hay componente externo importante junto al interno.",
              "El sangrado es persistente y ha llegado a producir anemia.",
              "Hay trombosis de repetición.",
            ].map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-green-600 flex-shrink-0" aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4">
            La técnica se elige en la valoración, según la anatomía y el grado de cada caso. Si te interesa el aspecto del postoperatorio, lo tratamos aparte en{" "}
            <Link href="/blog/cuanto-duele-cirugia-hemorroides" className="text-green-700 underline underline-offset-2 hover:text-green-800">
              cuánto duele la cirugía de hemorroides
            </Link>
            .
          </p>
        </div>

        <TreatmentBlock titulo="Cómo se decide tu tratamiento">
          <p>
            La decisión sale de la exploración, no de la conversación. En consulta se hace inspección, tacto rectal y anoscopía; eso establece el grado, si hay componente externo y si el sangrado se explica con lo encontrado.
          </p>
          <p>
            Ese último punto es el que más pesa. Si el sangrado no corresponde a lo que se ve, el tratamiento hemorroidal se detiene y primero se estudia el colon. Tratar unas hemorroides que sí existen no descarta que haya algo más arriba.
          </p>
          <p>
            <strong>El objetivo no es quitar las hemorroides.</strong> Es corregir lo que las está congestionando. Si el estreñimiento y el pujo siguen, el cuadro reaparece sin importar qué procedimiento se haya hecho.
          </p>
        </TreatmentBlock>

        <RedFlags
          titulo="Cuándo no esperar más"
          intro="Agenda valoración sin postergar si presentas:"
          senales={[
            "Sangrado por primera vez, a cualquier edad",
            "Sangrado que persiste más de una semana o que aumenta",
            "Dolor anal intenso que no te deja sentarte",
            "Bulto duro y doloroso de aparición súbita",
            "Fiebre acompañando al dolor anal",
            "Cansancio o palidez junto con el sangrado",
          ]}
        />
      </BlogPostLayout>
    </>
  )
}
