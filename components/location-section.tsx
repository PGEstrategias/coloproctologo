'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, MessageCircle, Car, Accessibility, ShieldCheck, Landmark } from 'lucide-react'

function LocationSection() {
  return (
    <section id="contacto" className="w-full py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Encuéntranos en Puebla
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Column 1: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Consultorio</h3>

              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-800">Dirección</p>
                    <p className="text-sm text-gray-600">[CALLE, NÚMERO, COLONIA]<br />Puebla, Puebla</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-800">Horarios (Previa Cita)</p>
                    <p className="text-sm text-gray-600">
                      Lunes, Martes, Jueves: 5:00 PM - 7:00 PM<br />
                      Sábados: Por la mañana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-800">Urgencias</p>
                    <a href="tel:+522225040271" className="text-sm text-green-700 hover:underline">222 504 0271</a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-800">WhatsApp Citas</p>
                    <a
                      href="https://wa.me/522224276475?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20cita."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 hover:underline"
                    >
                      222 427 6475
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Column 2: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-200 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-full min-h-[256px] lg:min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2713356416125!2d-98.2351351!3d19.0518042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6d880e9c525%3A0xcf41df13067407c4!2sDR%20JOSE%20MANUEL%20FERNANDEZ%20RIVERO%20COLOPROCTOLOGO!5e0!3m2!1ses-419!2smx!4v1770793795044!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio"
              />
            </div>

            {/* Below map details */}
            <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-green-50 rounded-lg px-2.5 sm:px-3 py-2 text-xs sm:text-sm">
                <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Estacionamiento</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-green-50 rounded-lg px-2.5 sm:px-3 py-2 text-xs sm:text-sm">
                <Accessibility className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Accesibilidad</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-green-50 rounded-lg px-2.5 sm:px-3 py-2 text-xs sm:text-sm">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Zona segura</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-green-50 rounded-lg px-2.5 sm:px-3 py-2 text-xs sm:text-sm">
                <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">[REFERENCIA]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
