'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, MessageCircle, Mail, Car, Accessibility, ShieldCheck, Landmark } from 'lucide-react'

function LocationSection() {
  return (
    <section id="contacto" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Encuéntranos en Puebla
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Column 1: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Consultorio</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Dirección</p>
                    <p className="text-gray-600">[CALLE, NÚMERO, COLONIA]<br />Puebla, Puebla</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Horarios</p>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Teléfono</p>
                    <a href="tel:+52XXXXXXXXXX" className="text-green-700 hover:underline">[NÚMERO CON FORMATO]</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <a
                      href="https://wa.me/521XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline"
                    >
                      [NÚMERO CON LINK DIRECTO]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href="mailto:contacto@drfernandez.com" className="text-green-700 hover:underline">[EMAIL]</a>
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
            <div className="bg-slate-200 rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px]">
              {/* Replace with actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-slate-100">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p className="font-medium">Google Maps</p>
                  <p className="text-sm">Insertar embed de Google Maps aquí</p>
                  {/*
                    <iframe
                      src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  */}
                </div>
              </div>
            </div>

            {/* Below map details */}
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 text-sm">
                <Car className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Estacionamiento disponible</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 text-sm">
                <Accessibility className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Acceso para personas con discapacidad</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Zona segura</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 text-sm">
                <Landmark className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Cerca de [REFERENCIA CONOCIDA]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
