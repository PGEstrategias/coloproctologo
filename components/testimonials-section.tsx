'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20valoración."

const testimonials = [
  {
    stars: 5,
    quote: "Llevaba 5 años sufriendo con hemorroides por vergüenza de ir al doctor. Cuando finalmente me decidí, el Dr. Fernández me hizo sentir cómoda desde el primer momento. Me explicó TODO con claridad.\n\nLa cirugía fue un viernes, y el lunes ya estaba trabajando desde casa. No puedo creer que esperé tanto tiempo.\n\nMi única queja: debí haberlo hecho antes.",
    name: "María G.",
    age: "42 años",
    procedure: "Hemorroidectomía",
    location: "Puebla",
  },
  {
    stars: 5,
    quote: "Tenía una fístula anal que me tenía desesperado. Dolor constante, infecciones recurrentes.\n\nEl Dr. Fernández fue muy honesto sobre el proceso. La cirugía salió perfecta, y en 2 semanas ya estaba de vuelta en el gym.\n\nEl seguimiento fue excelente. Siempre disponible para mis dudas.",
    name: "Roberto M.",
    age: "38 años",
    procedure: "Fistulotomía",
    location: "Puebla",
  },
  {
    stars: 5,
    quote: "La colonoscopia que me hicieron fue MUY diferente a lo que esperaba.\n\nNo sentí absolutamente nada. Me dormí y desperté. El Dr. Fernández me explicó los resultados inmediatamente.\n\nEncontraron un pólipo pequeño que removieron ahí mismo. Probablemente me salvó de algo peor en el futuro.",
    name: "Jorge L.",
    age: "55 años",
    procedure: "Colonoscopia",
    location: "Puebla",
  },
]

function TestimonialsSection() {
  return (
    <section id="testimonios" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Lo Que Dicen Mis Pacientes
          </h2>
          <p className="text-lg text-gray-600">
            Más de 500 Casos Exitosos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 whitespace-pre-line">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">— {testimonial.name}, {testimonial.age}</p>
                <p className="text-sm text-green-700">{testimonial.procedure} | {testimonial.location}</p>
              </div>
            </motion.div>
          ))}
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
              📱 SÉ EL PRÓXIMO CASO DE ÉXITO
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
