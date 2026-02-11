'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Building2 } from 'lucide-react'

const columns = [
  {
    icon: Award,
    title: "Experiencia",
    items: [
      "20 años de experiencia especializada",
      "Más de 10,000 consultas realizadas",
      "Más de 500 cirugías exitosas",
      "Certificado por el Consejo Mexicano de Coloproctología",
      "Cédula Profesional: [NÚMERO]",
    ],
  },
  {
    icon: Heart,
    title: "Enfoque",
    items: [
      "Atención empática y sin juicios",
      "Explicaciones claras en lenguaje sencillo",
      "Técnicas mínimamente invasivas",
      "Seguimiento personalizado post-operatorio",
      "Disponibilidad para resolver dudas",
    ],
  },
  {
    icon: Building2,
    title: "Instalaciones",
    items: [
      "Consultorio equipado en Puebla",
      "Quirófano certificado en Cielo Medical Center",
      "Equipo médico de última generación",
      "Estándares de higiene y seguridad",
      "Ambiente cómodo y discreto",
    ],
  },
]

function CredentialsSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué Confiar en el Dr. José Manuel Fernández?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <col.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{col.title}</h3>
              <div className="space-y-2 sm:space-y-3">
                {col.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0 text-xs sm:text-sm">✅</span>
                    <p className="text-gray-600 text-xs sm:text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges / Visual elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6"
        >
          <div className="bg-white rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-3 shadow-sm border border-gray-100 flex items-center gap-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">Consejo Mexicano de Coloproctología</span>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-3 shadow-sm border border-gray-100 flex items-center gap-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">COFEPRIS Autorizado</span>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-3 shadow-sm border border-gray-100 flex items-center gap-2">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">Cielo Medical Center</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CredentialsSection
