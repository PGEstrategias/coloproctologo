'use client'

import { motion } from 'framer-motion'

const problems = [
  "Has estado sufriendo en silencio por vergüenza",
  "El dolor o la incomodidad está afectando tu vida diaria",
  "Has probado cremas y remedios caseros sin resultados",
  "Te preocupa que la cirugía sea extremadamente dolorosa",
  "No sabes si realmente necesitas operarte o puedes esperar",
  "Tienes miedo de cuánto tiempo estarás fuera del trabajo",
]

function ProblemSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Sé Exactamente Cómo Te Sientes...
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Si estás aquí es porque probablemente:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100"
        >
          <div className="space-y-3 sm:space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-2.5 sm:gap-3"
              >
                <span className="text-red-500 text-base sm:text-xl mt-0.5 flex-shrink-0">❌</span>
                <p className="text-sm sm:text-lg text-gray-700">{problem}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
            <p className="text-sm sm:text-lg text-gray-800">
              Y lo peor: <strong>cada día que pasa, te sientes más frustrado y preocupado.</strong>
            </p>
            <p className="text-green-700 text-base sm:text-xl font-semibold mt-3 sm:mt-4">
              Pero déjame decirte algo importante...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
