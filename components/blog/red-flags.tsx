import { AlertTriangle } from 'lucide-react'

interface RedFlagsProps {
  /** Encabezado del bloque. Lleva id para que la tabla de contenido lo ancle. */
  id?: string
  titulo?: string
  intro?: string
  senales: string[]
}

/**
 * Bloque "Cuándo acudir al proctólogo".
 *
 * Va en todos los artículos clínicos: es el que convierte lectura informativa
 * en consulta, y el que evita que un síntoma de alarma se lea como algo banal.
 */
function RedFlags({
  id = 'cuando-acudir',
  titulo = 'Cuándo acudir al proctólogo',
  intro = 'Acude a valoración sin postergar si presentas:',
  senales,
}: RedFlagsProps) {
  return (
    <div>
      <h2
        id={id}
        className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-3"
      >
        {titulo}
      </h2>
      <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-5 sm:p-6">
        <p className="flex items-start gap-2 text-red-800 font-semibold text-sm sm:text-base mb-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          {intro}
        </p>
        <ul className="space-y-2">
          {senales.map((senal) => (
            <li key={senal} className="flex gap-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="text-red-500 flex-shrink-0" aria-hidden="true">•</span>
              <span>{senal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RedFlags
