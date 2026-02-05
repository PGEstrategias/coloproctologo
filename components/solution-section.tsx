'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Clock, Scissors, Heart, Activity } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."

const benefits = [
  { icon: Heart, text: "Menos dolor post-operatorio (la mayoría lo describe como \"molestia manejable\")" },
  { icon: Clock, text: "Recuperación 3-5 veces más rápida que antes" },
  { icon: Scissors, text: "Cicatrices mínimas o inexistentes" },
  { icon: Activity, text: "Vuelta al trabajo en 3-7 días (dependiendo del procedimiento)" },
  { icon: Check, text: "Técnicas modernas que minimizan complicaciones" },
]

const comparison = {
  before: {
    title: "Cirugía Tradicional",
    items: ["Incisiones grandes", "Dolor intenso post-op", "2-4 semanas de recuperación", "Mayor riesgo de complicaciones", "Hospitalización prolongada"],
  },
  after: {
    title: "Cirugía Mínimamente Invasiva",
    items: ["Incisiones mínimas", "Molestia manejable", "3-7 días de recuperación", "Complicaciones mínimas", "Ambulatorio o 1 día"],
  },
}

function SolutionSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            La Cirugía Proctológica Ya NO es Como Hace 20 Años
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En mis 20 años como coloproctólogo he visto la transformación completa de estos procedimientos.
            Hoy, el <strong>90% de mis cirugías son mínimamente invasivas</strong>, lo que significa:
          </p>
        </motion.div>

        {/* Benefits list */}
        <div className="grid md:grid-cols-2 gap-4 mb-16 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-start gap-3 p-4 bg-green-50 rounded-xl"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-gray-700">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Before vs After comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Antes vs Ahora</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-red-700 mb-4">{comparison.before.title}</h4>
              <div className="space-y-3">
                {comparison.before.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-red-400">✕</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-green-700 mb-4">{comparison.after.title}</h4>
              <div className="space-y-3">
                {comparison.after.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recovery timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Timeline de Recuperación</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { day: "Día 1", desc: "Cirugía ambulatoria", color: "bg-blue-500" },
              { day: "Día 3-5", desc: "Molestia leve controlada", color: "bg-yellow-500" },
              { day: "Día 7", desc: "Vuelta al trabajo", color: "bg-green-500" },
              { day: "Semana 3-4", desc: "Recuperación completa", color: "bg-green-600" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 md:flex-col md:text-center">
                <div className={`w-4 h-4 rounded-full ${step.color} flex-shrink-0`} />
                <div>
                  <p className="font-bold text-gray-900">{step.day}</p>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {i < 3 && <ArrowRight className="hidden md:block w-6 h-6 text-gray-300 absolute" />}
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
          He realizado <strong>más de 500 cirugías exitosas</strong> de hemorroides, fístulas, fisuras y otros procedimientos proctológicos.
          Y cada paciente recibe atención personalizada desde la primera consulta hasta el último seguimiento.
        </p>

        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-lg">
              📱 AGENDA TU VALORACIÓN SIN COMPROMISO
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
