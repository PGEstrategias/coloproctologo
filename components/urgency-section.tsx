'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20URGENTE%20-%20necesito%20una%20valoración%20lo%20antes%20posible."

const symptoms = [
  "Sangrado rectal frecuente o abundante",
  "Dolor intenso que no cede con analgésicos",
  "Bulto o masa que saliente y no regresa",
  "Fiebre junto con dolor rectal",
  "Secreción purulenta (pus)",
  "Cambios súbitos en hábitos intestinales",
  "Sangre oscura o negra en heces",
  "Dolor que te despierta por las noches",
]

function UrgencySection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Cuándo Debes Agendar Tu Valoración AHORA?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-red-200 shadow-sm"
        >
          <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-base sm:text-lg font-bold text-red-700">
              Si tienes estos síntomas, NO esperes más:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="flex items-start gap-2"
              >
                <span className="text-red-500 mt-0.5 flex-shrink-0 text-sm">❌</span>
                <p className="text-sm sm:text-base text-gray-700">{symptom}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-red-700 font-semibold text-base sm:text-lg mb-5 sm:mb-6">
            Mientras más esperes, más complicado puede volverse.
          </p>

          <div className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full sm:inline-block sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base px-6 py-5 shadow-lg">
                CITA URGENTE
              </Button>
            </a>
            <p className="text-xs text-red-600 mt-2">Respuesta en menos de 24 hrs</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UrgencySection
