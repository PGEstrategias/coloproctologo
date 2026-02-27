'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Clock, Building2, Calendar, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/522224276475?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20cita."

const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  if (typeof window !== 'undefined' && (window as any).gtagWhatsAppConversion) {
    (window as any).gtagWhatsAppConversion(WHATSAPP_LINK)
  } else {
    window.open(WHATSAPP_LINK, '_blank')
  }
}

const procedures = [
  {
    title: "Hemorroidectomía",
    what: "Cirugía para eliminar hemorroides internas o externas que causan dolor, sangrado o prolapso.",
    when: [
      "Hemorroides que no responden a tratamiento conservador",
      "Sangrado recurrente",
      "Dolor constante que afecta tu calidad de vida",
      "Hemorroides trombosadas",
    ],
    recovery: {
      procedure: "30-45 minutos",
      hospital: "1 día en observación",
      light: "Pocos días",
      full: "2-3 semanas",
    },
  },
  {
    title: "Fistulotomía",
    what: "Cirugía para tratar fístulas anales (conexiones anormales entre el recto y la piel).",
    when: [
      "Infecciones recurrentes",
      "Secreción constante",
      "Dolor al sentarse",
      "Fístulas que no cierran solas",
    ],
    recovery: {
      procedure: "45-60 minutos",
      hospital: "1 día en observación",
      light: "Pocos días",
      full: "3-4 semanas",
    },
  },
  {
    title: "Colonoscopia",
    what: "Estudio diagnóstico para examinar el colon completo y detectar problemas.",
    when: [
      "Sangrado rectal sin causa clara",
      "Cambios en hábitos intestinales",
      "Detección de pólipos o cáncer",
      "Seguimiento post-cirugía",
    ],
    recovery: {
      procedure: "20-30 minutos",
      hospital: "Sedación: Sí (no sentirás nada)",
      light: "Mismo día",
      full: "Resultados inmediatos",
    },
  },
]

function ProcedureCard({ procedure }: { procedure: typeof procedures[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left min-h-[56px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{procedure.title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-2"
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
            <div className="px-4 sm:px-6 pb-5 sm:pb-6 space-y-4 sm:space-y-6">
              {/* What is it */}
              <div>
                <h4 className="font-bold text-gray-800 mb-1.5 sm:mb-2 text-sm sm:text-base">¿Qué es?</h4>
                <p className="text-sm sm:text-base text-gray-600">{procedure.what}</p>
              </div>

              {/* When is it needed */}
              <div>
                <h4 className="font-bold text-gray-800 mb-1.5 sm:mb-2 text-sm sm:text-base">¿Cuándo es necesaria?</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {procedure.when.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5 flex-shrink-0">-</span>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery */}
              <div>
                <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Recuperación típica:</h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-slate-50 rounded-lg p-2.5 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-medium text-gray-500">Procedimiento</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">{procedure.recovery.procedure}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2.5 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-medium text-gray-500">Hospitalización</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">{procedure.recovery.hospital}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2.5 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-medium text-gray-500">Act. ligeras</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">{procedure.recovery.light}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2.5 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-medium text-gray-500">Recuperación total</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">{procedure.recovery.full}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block" onClick={handleWhatsAppClick}>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-1 sm:mt-2 min-h-[44px] text-sm sm:text-base">
                  AGENDAR VALORACIÓN
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ProceduresSection() {
  return (
    <section id="procedimientos" className="w-full py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Procedimientos que Realizo
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {procedures.map((procedure, index) => (
            <ProcedureCard key={index} procedure={procedure} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProceduresSection
