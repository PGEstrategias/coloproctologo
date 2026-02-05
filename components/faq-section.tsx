'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "¿Cuánto duele realmente la cirugía de hemorroides?",
    answer: `La percepción del dolor varía en cada persona, pero la mayoría de mis pacientes lo describen como "molestia manejable" y no el dolor extremo que imaginaban.

Con técnicas modernas y manejo adecuado del dolor (medicamentos específicos), el 85% de mis pacientes califican su dolor post-op como 3-5 de 10 en los primeros 2-3 días.

Lo importante: NO es como las cirugías de hace 20 años.`,
  },
  {
    question: "¿Cuánto tiempo estaré fuera del trabajo?",
    answer: `Depende del procedimiento y tu tipo de trabajo:

• Trabajo de oficina/escritorio: 5-7 días
• Trabajo que requiere estar de pie: 10-14 días
• Trabajo físico pesado: 3-4 semanas

La mayoría de mis pacientes se operan viernes y para el lunes siguiente ya están haciendo trabajo ligero desde casa.`,
  },
  {
    question: "¿Cuánto cuesta la cirugía?",
    answer: `El costo varía según el procedimiento exacto y tu caso específico.

Consulta de valoración: $1,200
Paquete quirúrgico (aproximado): $30,000

Incluye: Honorarios médicos, anestesiólogo, quirófano, hospitalización, medicamentos básicos.

Trabajo con algunos seguros (GNP, BUPA) y acepto:
✅ Pago con tarjeta de crédito
✅ Financiamiento disponible

En tu valoración te daré un presupuesto exacto para tu caso.`,
  },
  {
    question: "¿Es realmente necesario operarme o hay otras opciones?",
    answer: `Excelente pregunta. NO todos los casos requieren cirugía.

Tratamientos conservadores (cremas, cambios de dieta, baños de asiento) funcionan para:
• Hemorroides grado I o II sin complicaciones
• Fisuras agudas recientes
• Casos leves

La cirugía es necesaria cuando:
• Los tratamientos conservadores no funcionaron
• El sangrado es frecuente
• El dolor afecta tu calidad de vida
• Hay complicaciones (trombosis, infección)

En tu valoración te diré honestamente si necesitas cirugía o podemos intentar tratamiento conservador primero.`,
  },
  {
    question: "¿Qué pasa si el problema regresa después de la cirugía?",
    answer: `Con técnicas adecuadas y siguiendo indicaciones post-operatorias, la tasa de recurrencia es menor al 5%.

Lo que hacemos para minimizar recurrencias:
✅ Técnica quirúrgica precisa
✅ Educación sobre prevención
✅ Indicaciones claras de cuidado
✅ Seguimiento a largo plazo

Y si llegara a haber alguna complicación o recurrencia, estaré ahí para manejarlo.`,
  },
  {
    question: "¿Cómo sé que puedo confiar en ti?",
    answer: `Entiendo perfectamente esta preocupación. Es tu cuerpo y tu salud.

Lo que puedo ofrecerte:
✅ Cédula profesional: [NÚMERO]
✅ 20 años de experiencia comprobable
✅ Más de 500 cirugías exitosas
✅ Consultorio y quirófano certificados
✅ Avisos de COFEPRIS al día
✅ Testimonios reales de pacientes
✅ Primera consulta sin compromiso

Te invito a que vengas a conocerme. Si después de la valoración no te sientes cómodo, no hay ningún compromiso de continuar.`,
  },
  {
    question: "¿La consulta es privada y confidencial?",
    answer: `ABSOLUTAMENTE.

Todo lo que hablemos está protegido por secreto médico. No comparto información con nadie sin tu autorización expresa.

Entiendo que este es un tema delicado y te garantizo total discreción.`,
  },
  {
    question: "¿Aceptas seguros médicos?",
    answer: `Trabajo con algunos seguros como GNP y BUPA, aunque prefiero reembolso.

Esto significa:
• Pagas directamente
• Tu aseguradora te reembolsa según tu póliza

En tu valoración te ayudo con toda la documentación necesaria para tu aseguradora.

También acepto:
✅ Pago con tarjeta de crédito
✅ Financiamiento`,
  },
  {
    question: "¿Qué tan pronto puedo tener mi valoración?",
    answer: `Por lo general tengo disponibilidad en la misma semana.

Si es un caso urgente (dolor severo, sangrado importante), hago lo posible por verte en 24-48 horas.

Agenda ahora y te contacto para confirmar el horario que mejor te funcione.`,
  },
  {
    question: "¿Puedo hacer ejercicio después de la cirugía?",
    answer: `Sí, pero gradualmente:

Semana 1: Caminatas ligeras solamente
Semana 2-3: Cardio ligero (bici estática, caminadora)
Semana 4: Retorno gradual a tu rutina normal
Semana 6-8: Sin restricciones (con autorización mía)

Muchos de mis pacientes son deportistas activos y TODOS vuelven a su nivel previo.`,
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">
          {index + 1}. {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQSection() {
  return (
    <section id="faq" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Las Dudas Que TODOS Tienen
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
