import Link from "next/link"

import { blogPosts, type Silo } from "@/lib/blog-posts"

interface RelatedPostsProps {
  /** Silo del que se listan los artículos. */
  silo: Silo
  /** Slug del artículo actual, para no enlazarse a sí mismo. */
  slugActual: string
  id?: string
  titulo?: string
}

/**
 * Bloque "Temas relacionados".
 *
 * La norma de enlazado interno pide que cada pilar enlace a todos sus
 * satélites. Se resuelve leyendo el registro en vez de listarlos a mano, para
 * que un artículo nuevo aparezca solo al registrarse.
 */
function RelatedPosts({
  silo,
  slugActual,
  id = "temas-relacionados",
  titulo = "Temas relacionados",
}: RelatedPostsProps) {
  const relacionados = blogPosts.filter(
    (p) => p.category === silo && p.slug !== slugActual
  )

  if (relacionados.length === 0) return null

  return (
    <div data-qa="related">
      <h2
        id={id}
        className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mb-4"
      >
        {titulo}
      </h2>
      <ul className="space-y-3">
        {relacionados.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block bg-slate-50 rounded-xl p-4 sm:p-5 hover:bg-slate-100 transition-colors"
            >
              <span className="block font-bold text-gray-900 text-sm sm:text-base mb-1">
                {post.title}
              </span>
              <span className="block text-gray-600 text-sm leading-relaxed">
                {post.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedPosts
