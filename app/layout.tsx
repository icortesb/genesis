import type React from "react"
import type { Metadata } from "next"
import { Poppins, Oswald, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins", // Variable para el cuerpo del texto
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald", // Variable para títulos principales
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans", // Variable para títulos secundarios
})

export const metadata: Metadata = {
  title: "Vivenciando Mendoza",
  description:
    "Vivencia Mendoza a tu manera. Experiencias únicas, hospedajes seleccionados y traslados confiables en la provincia de Mendoza, Argentina.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${oswald.variable} ${openSans.variable} font-sans antialiased bg-gradient-to-br from-red-400 via-red-300 to-red-200 dark:from-red-900 dark:via-red-800 dark:to-red-700 min-h-screen`}
      >
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
