import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ripple",
  description: "Small donations, massive impact.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme-ripple">
      <body>{children}</body>
    </html>
  )
}
