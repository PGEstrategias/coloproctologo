'use client'

import { useState } from 'react'
import { ChevronDown, List } from 'lucide-react'

export interface TocItem {
  /** Debe coincidir con el id del <h2> correspondiente en el artículo. */
  id: string
  label: string
}

interface ArticleTocProps {
  items: TocItem[]
}

/**
 * Tabla de contenido con anclas.
 *
 * En móvil arranca colapsada para no empujar el contenido debajo del pliegue;
 * en escritorio se muestra siempre abierta.
 */
function ArticleToc({ items }: ArticleTocProps) {
  const [abierta, setAbierta] = useState(false)

  if (items.length === 0) return null

  return (
    <nav
      aria-label="Contenido del artículo"
      className="bg-slate-50 border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setAbierta((v) => !v)}
        aria-expanded={abierta}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left sm:cursor-default"
      >
        <span className="flex items-center gap-2 font-bold text-gray-900 text-sm uppercase tracking-wide">
          <List className="w-4 h-4 text-green-600" />
          En este artículo
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform sm:hidden ${abierta ? 'rotate-180' : ''}`}
        />
      </button>

      <ol className={`px-4 sm:px-5 pb-4 sm:pb-5 space-y-2 ${abierta ? 'block' : 'hidden sm:block'}`}>
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-2 text-sm">
            <span className="text-green-600 font-semibold flex-shrink-0">{i + 1}.</span>
            <a
              href={`#${item.id}`}
              onClick={() => setAbierta(false)}
              className="text-gray-700 hover:text-green-700 hover:underline leading-relaxed"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default ArticleToc
