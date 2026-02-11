import { Facebook, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Doctor info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Dr. José Manuel Fernández Rivero</h3>
            <div className="space-y-1 text-xs sm:text-sm text-white/70">
              <p>Cédula Profesional: [NÚMERO]</p>
              <p>Especialidad: Coloproctología</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Información Legal</h3>
            <div className="space-y-1 text-xs sm:text-sm text-white/70">
              <p>Aviso de Funcionamiento COFEPRIS: [NÚMERO]</p>
              <p>Aviso de Publicidad COFEPRIS: [NÚMERO]</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Ubicaciones</h3>
            <div className="space-y-1 text-xs sm:text-sm text-white/70">
              <p>Consultorio: [DIRECCIÓN COMPLETA]</p>
              <p>Quirófano: Cielo Medical Center</p>
            </div>
          </div>
        </div>

        {/* Social & links */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">Aviso de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white/80 transition-colors">Términos y Condiciones</a>
          </div>

          <p className="text-xs sm:text-sm text-white/50 text-center">
            &copy; 2026 Dr. José Manuel Fernández - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
