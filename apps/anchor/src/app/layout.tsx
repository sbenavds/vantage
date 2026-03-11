import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anchor Insurance",
  description: "Trusted car insurance coverage for every driver.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme-anchor">
      <body>{children}</body>
    </html>
  )
}
