import Image from "next/image"
import Link from "next/link"

const LOGO_URL =
  "https://res.cloudinary.com/dxcr9utre/image/upload/v1770793713/WhatsApp_Image_2026-02-11_at_1.07.21_AM_jrjeyx.jpg"

export function FormShell({
  title,
  subtitle,
  children,
  showPrivacyNote = true,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
  showPrivacyNote?: boolean
}) {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 w-full max-w-md mx-auto px-4 py-8 sm:py-10 flex flex-col">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-sm mb-3">
            <Image
              src={LOGO_URL}
              alt="Dr. José Manuel Fernández Rivero"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs font-medium text-green-700">
            Dr. José Manuel Fernández · Coloproctólogo
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{subtitle}</p>
          )}
          {children}
        </div>

        {showPrivacyNote && (
          <p className="text-center text-[11px] text-gray-400 mt-5 leading-relaxed px-4">
            Tus respuestas son confidenciales y se usan únicamente para mejorar tu
            atención.{" "}
            <Link href="/privacy" className="underline hover:text-gray-500">
              Aviso de privacidad
            </Link>
          </p>
        )}
      </div>
    </main>
  )
}
