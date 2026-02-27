import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. José Manuel Fernández Rivero | Coloproctólogo en Puebla",
  description: "Cirugía Proctológica Mínimamente Invasiva en Puebla. Más de 500 cirugías exitosas. Hemorroides, fístulas, fisuras y colonoscopia. Agenda tu valoración confidencial.",
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
