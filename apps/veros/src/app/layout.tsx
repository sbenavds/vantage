import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Veros Biotech",
  description: "Advancing clinical research for a healthier future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme-veros">
      <body>{children}</body>
    </html>
  )
}
