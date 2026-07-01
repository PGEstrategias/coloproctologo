import Image from "next/image"
import Link from "next/link"

const WHATSAPP_LINK = "https://wa.me/522224276475?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20cita."
const LOGO_URL = "https://res.cloudinary.com/dxcr9utre/image/upload/v1770793713/WhatsApp_Image_2026-02-11_at_1.07.21_AM_jrjeyx.jpg"

function BlogHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm py-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white shadow-sm">
            <Image
              src={LOGO_URL}
              alt="Dr. José Manuel Fernández Rivero"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-xs leading-tight text-white">Dr. José Manuel Fernández</p>
            <p className="text-[10px] text-green-300">Coloproctólogo</p>
          </div>
        </Link>
        <nav className="hidden sm:flex items-center gap-1 text-sm text-white/80">
          <Link href="/" className="px-3 py-2 hover:text-white">Inicio</Link>
          <Link href="/blog" className="px-3 py-2 text-white font-medium">Blog</Link>
          <Link href="/#faq" className="px-3 py-2 hover:text-white">FAQ</Link>
          <Link href="/#contacto" className="px-3 py-2 hover:text-white">Contacto</Link>
        </nav>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium rounded-md px-3 h-9">
            Agendar Cita
          </button>
        </a>
      </div>
    </header>
  )
}

export default BlogHeader
