'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, BarChart3, Shield } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Tasa de éxito en cirugías",
    desc: "Resultados exitosos verificados",
  },
  {
    icon: BarChart3,
    value: "<5%",
    label: "Tasa de recurrencia",
    desc: "Con técnicas modernas",
  },
  {
    icon: Shield,
    value: "500+",
    label: "Cirugías realizadas",
    desc: "Experiencia comprobable",
  },
]

function ResultsSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Resultados Reales
          </h2>
          <p className="text-lg text-gray-600">
            Cicatrices Mínimas, Resultados Máximos
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <p>Todas las imágenes son de casos reales con autorización del paciente.</p>
              <p>Contenido médico - puede ser sensible para algunas personas.</p>
            </div>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="font-semibold text-gray-700">{stat.label}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Infographic / Recovery timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Timeline de Recuperación Visual
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { day: "Día 3", status: "Post-operatorio", color: "bg-yellow-400", bgColor: "bg-yellow-50", textColor: "text-yellow-800" },
              { day: "Día 7", status: "Mejoría notable", color: "bg-blue-400", bgColor: "bg-blue-50", textColor: "text-blue-800" },
              { day: "Semana 2", status: "Casi recuperado", color: "bg-green-400", bgColor: "bg-green-50", textColor: "text-green-800" },
              { day: "Semana 4", status: "Recuperación total", color: "bg-green-600", bgColor: "bg-green-50", textColor: "text-green-800" },
            ].map((item, i) => (
              <div key={i} className={`${item.bgColor} rounded-xl p-4 text-center`}>
                <div className={`w-4 h-4 ${item.color} rounded-full mx-auto mb-2`} />
                <p className={`font-bold text-sm ${item.textColor}`}>{item.day}</p>
                <p className="text-xs text-gray-600 mt-1">{item.status}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsSection
