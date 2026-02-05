'use client'

import { motion } from 'framer-motion'
import { ClipboardList, TestTube, CalendarDays, Stethoscope, Home, UserCheck } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."

const steps = [
  {
    icon: ClipboardList,
    step: "PASO 1",
    title: "Valoración Inicial ($1,200)",
    includes: [
      "Consulta completa de 30-40 minutos",
      "Revisión de tu historial médico",
      "Examen físico (realizado con respeto y profesionalismo)",
      "Diagnóstico preciso",
      "Explicación detallada de opciones de tratamiento",
      "Plan personalizado",
      "Resolución de todas tus dudas",
    ],
    details: "Duración: 30-40 minutos | Ubicación: Consultorio en Puebla",
  },
  {
    icon: TestTube,
    step: "PASO 2",
    title: "Estudios Pre-Operatorios (Si aplica)",
    includes: [
      "Análisis de sangre básicos",
      "Electrocardiograma (si >40 años)",
      "Cualquier estudio específico según tu caso",
      "Te indicamos exactamente dónde hacerlos",
      "Revisamos resultados antes de programar",
    ],
    details: null,
  },
  {
    icon: CalendarDays,
    step: "PASO 3",
    title: "Programación de Cirugía",
    includes: [
      "Agendamos fecha en quirófano",
      "Te explicamos preparación pre-operatoria",
      "Resolvemos dudas de último momento",
      "Coordinamos con anestesiólogo",
    ],
    details: "Disponibilidad: Por lo general en 1-2 semanas",
  },
  {
    icon: Stethoscope,
    step: "PASO 4",
    title: "Día de la Cirugía",
    includes: [
      "Llegada 1-2 horas antes",
      "Preparación pre-quirúrgica",
      "Anestesia (general o regional según caso)",
      "Cirugía mínimamente invasiva",
      "Recuperación en sala post-op",
    ],
    details: "Tiempo total en hospital: 4-8 horas | Ubicación: Cielo Medical Center | Acompañante necesario",
  },
  {
    icon: Home,
    step: "PASO 5",
    title: "Recuperación en Casa",
    includes: [
      "Indicaciones claras por escrito",
      "Medicamentos para dolor",
      "Cuidados de la herida",
      "Restricciones de actividad",
      "Línea directa conmigo para dudas",
    ],
    details: "Disponibilidad: 24/7 para emergencias",
  },
  {
    icon: UserCheck,
    step: "PASO 6",
    title: "Seguimiento Post-Operatorio",
    includes: [
      "Primera revisión: 3-5 días después",
      "Segunda revisión: 2 semanas después",
      "Seguimiento final: 4-6 semanas",
      "Sin costo adicional",
      "Monitoreamos tu recuperación completa",
    ],
    details: null,
  },
]

function ProcessSection() {
  return (
    <section id="proceso" className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            ¿Cómo es el Proceso Completo?
          </h2>
          <p className="text-xl text-green-700 font-semibold">
            Todo Explicado con Transparencia
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/20">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">{step.step}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-3">{step.title}</h3>
                    <div className="space-y-2">
                      {step.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5 flex-shrink-0 text-sm">✅</span>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    {step.details && (
                      <p className="mt-3 text-sm text-gray-500 bg-slate-50 rounded-lg px-3 py-2">
                        {step.details}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-lg">
              📱 COMIENZA CON TU VALORACIÓN HOY
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
