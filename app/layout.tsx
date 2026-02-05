import type { Metadata } from "next";
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
      </head>
      <body className="font-sans" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>{children}</body>
    </html>
  );
}
