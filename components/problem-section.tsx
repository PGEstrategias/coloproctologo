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
    <section className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sé Exactamente Cómo Te Sientes...
          </h2>
          <p className="text-lg text-gray-600">
            Si estás aquí es porque probablemente:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <span className="text-red-500 text-xl mt-0.5 flex-shrink-0">❌</span>
                <p className="text-gray-700 text-lg">{problem}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-gray-800 text-lg">
              Y lo peor: <strong>cada día que pasa, te sientes más frustrado y preocupado.</strong>
            </p>
            <p className="text-green-700 text-xl font-semibold mt-4">
              Pero déjame decirte algo importante...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
