import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// --- FORCED ICON RESOLUTION METADATA ---
export const metadata: Metadata = {
  title: 'IDT Pakistan – Digital Training Institute in Islamabad',
  description:
    "IDT Pakistan is Islamabad's leading institute for digital skills. Enroll in Medical Billing, Truck Dispatching, Web Dev, SEO & 15+ certified courses.",
  
  // Is configuration se browser auto-detect ke sahare nahi baithta, explicitly asset path hit karta ha
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png', // Apple touch devices k liye safe build
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}