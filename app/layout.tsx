import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/ScrollProgress"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shiva Raghav Rajasekar - Portfolio",
  description: "A showcase of my work, skills, and experience in computer science and software development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'