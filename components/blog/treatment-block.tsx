import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TreatmentBlockProps {
  id?: string
  titulo?: string
  children: React.ReactNode
  /**
   * Enlace interno al que apunta el bloque. Mientras no existan páginas de
   * tratamiento dedicadas, apunta a la sección de procedimientos de la landing.
   */
  href?: string
  enlaceTexto?: string
}

/**
 * Bloque "Cómo se trata en consulta".
 *
 * Es el puente entre el contenido informativo y la página que convierte. Cada
 * artículo debe llevar uno, con un único enlace interno.
 */
function TreatmentBlock({
  id = 'como-se-trata',
  titulo = 'Cómo se trata en consulta',
  children,
  href = '/#procedimientos',
  enlaceTexto = 'Ver los procedimientos que realiza el Dr. Fernández',
}: TreatmentBlockProps) {
  return (
    <div>
      <h2
        id={id}
        className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3"
      >
        {titulo}
      </h2>
      <div className="bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-5 sm:p-6">
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
          {children}
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-green-700 hover:text-green-800 hover:underline"
        >
          {enlaceTexto}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default TreatmentBlock
