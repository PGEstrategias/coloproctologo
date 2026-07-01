import type { Metadata } from "next"

import BlogHeader from "@/components/blog/blog-header"
import BlogWhatsAppFloat from "@/components/blog/blog-whatsapp-float"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: {
    template: "%s | Dr. José Manuel Fernández",
    default: "Blog | Dr. José Manuel Fernández",
  },
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="text-gray-900">
      <BlogHeader />
      <main>{children}</main>
      <Footer />
      <BlogWhatsAppFloat />
    </div>
  )
}
