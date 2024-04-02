import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "shadcn/ui",
  description: "Themes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
