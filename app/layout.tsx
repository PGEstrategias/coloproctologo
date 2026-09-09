import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const CLOUDINARY = "https://res.cloudinary.com/djduba5fd/image/upload"

// Favicon: el logo "Cirugía de Colon y Recto". El asset original es un JPG con
// el logo centrado sobre fondo blanco, así que lo recortamos a la figura del
// colon (el texto circular es ilegible a tamaño de pestaña) y lo entregamos
// cuadrado y en PNG:
//   e_trim  -> elimina el margen blanco alrededor del logo
//   c_crop  -> se queda con el 45% x 60% central, es decir el colon
//   c_pad   -> lo cuadra sin recortar, rellenando con blanco
const LOGO_ID = "v1788922755/WhatsApp_Image_2026-09-08_at_8.52.10_PM_jvko2w.png"
const iconUrl = (size: number) =>
  `${CLOUDINARY}/e_trim/c_crop,g_center,w_0.45,h_0.6/c_pad,w_${size},h_${size},b_white/q_auto/${LOGO_ID}`

// Imagen de la tarjeta que precargan WhatsApp, Facebook y LinkedIn al compartir
// el enlace. 1200x630 es la proporción que esas plataformas usan para la vista
// previa grande; g_auto deja el recorte centrado en el sujeto de la foto y
// q_auto:good mantiene el peso bajo, que es lo que WhatsApp necesita para
// mostrarla en grande en vez de reducirla a una miniatura.
const SHARE_IMAGE_ID = "v1788923585/WhatsApp_Image_2026-09-07_at_10.28.30_AM_zjxbwr.jpg"
const SHARE_IMAGE = `${CLOUDINARY}/c_fill,g_auto,w_1200,h_630,q_auto:good/${SHARE_IMAGE_ID}`

const SITE_TITLE = "Dr. José Manuel Fernández Rivero | Coloproctólogo en Puebla"
const SITE_DESCRIPTION = "Cirugía Proctológica Mínimamente Invasiva en Puebla. Más de 500 cirugías exitosas. Hemorroides, fístulas, fisuras y colonoscopia. Agenda tu valoración confidencial."

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: iconUrl(32), sizes: "32x32", type: "image/png" },
      { url: iconUrl(192), sizes: "192x192", type: "image/png" },
      { url: iconUrl(512), sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: iconUrl(32), sizes: "32x32", type: "image/png" }],
    apple: [{ url: iconUrl(180), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Dr. José Manuel Fernández Rivero — Coloproctólogo",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Dr. José Manuel Fernández Rivero, coloproctólogo en Puebla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17979071807"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17979071807');
          `}
        </Script>
        <Script id="gtag-call-conversion" strategy="afterInteractive">
          {`
            window.gtagCallConversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') { window.location = url; }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17979071807/n2c4CNiJg4AcEL-6i_1C',
                'value': 1.0, 'currency': 'MXN', 'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <Script id="gtag-whatsapp-conversion" strategy="afterInteractive">
          {`
            window.gtagWhatsAppConversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') { window.location = url; }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17979071807/IiXsCNuJg4AcEL-6i_1C',
                'value': 1.0, 'currency': 'MXN', 'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className="font-sans" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>{children}</body>
    </html>
  );
}
