import { Facebook, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Doctor info */}
          <div>
            <h3 className="font-bold text-lg mb-3">Dr. José Manuel Fernández Rivero</h3>
            <div className="space-y-1 text-sm text-white/70">
              <p>Cédula Profesional: [NÚMERO]</p>
              <p>Especialidad: Coloproctología</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-3">Información Legal</h3>
            <div className="space-y-1 text-sm text-white/70">
              <p>Aviso de Funcionamiento COFEPRIS: [NÚMERO]</p>
              <p>Aviso de Publicidad COFEPRIS: [NÚMERO]</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-3">Ubicaciones</h3>
            <div className="space-y-1 text-sm text-white/70">
              <p>Consultorio: [DIRECCIÓN COMPLETA]</p>
              <p>Quirófano: Cielo Medical Center</p>
            </div>
          </div>
        </div>

        {/* Social & links */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">Aviso de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white/80 transition-colors">Términos y Condiciones</a>
          </div>

          <p className="text-sm text-white/50">
            &copy; 2026 Dr. José Manuel Fernández - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
