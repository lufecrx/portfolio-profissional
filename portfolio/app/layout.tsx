import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Luiz Felipe C. Gomes | Desenvolvedor Full-Stack — Portfólio VidaPlena",
  description:
    "Portfólio profissional de Luiz Felipe C. Gomes, desenvolvido para o processo seletivo FESF-SUS. Destaque para o projeto VidaPlena: sistema de gestão em saúde familiar com FastAPI, Next.js e Docker.",
  keywords: ["Full-Stack Developer", "FastAPI", "Next.js", "Docker", "SUS", "VidaPlena"],
  openGraph: {
    title: "Portfólio — Luiz Felipe C. Gomes",
    description: "Projeto VidaPlena para processo seletivo FESF-SUS",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-text-primary font-sans">
        {children}
      </body>
    </html>
  )
}
