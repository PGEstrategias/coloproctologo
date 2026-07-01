import type { Metadata } from "next"
import Link from "next/link"

import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre salud coloproctológica escritos por el Dr. José Manuel Fernández Rivero, coloproctólogo certificado en Puebla.",
}

export default function BlogIndexPage() {
  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 pt-28 pb-14 sm:pt-32 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-white/60 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Inicio</Link><span>/</span>
            <span className="text-white/90">Blog</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Blog de Coloproctología
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl">
            Información clara y honesta sobre hemorroides, fisuras, sangrado y otros temas proctológicos, escrita por el Dr. José Manuel Fernández Rivero.
          </p>
        </div>
      </section>

      <section className="w-full py-10 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-green-300 hover:shadow-lg transition-all"
              >
                <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-200 mb-3">
                  {post.category}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-green-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {post.description}
                </p>
                <p className="text-xs text-gray-400">
                  {post.dateLabel} · Lectura de {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
