import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import './interior.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SGP Digital Solutions - Smart Websites & Efficient Systems',
  description:
    'Save time on admin and workflows. Affordable websites, business automation, and practical digital solutions for people who do the real work.',
  keywords: [
    'web development',
    'digital solutions',
    'admin workflow healthcheck',
    'business process automation',
    'Microsoft 365 automation',
    'Power Automate support',
    'SGP Digital',
  ],
  authors: [{ name: 'SGP Digital Solutions' }],
  openGraph: {
    title: 'SGP Digital Solutions',
    description: 'Smart websites, efficient systems, and less admin faff',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/images/sgpfavicon.png', type: 'image/png' }],
    apple: '/images/sgpfavicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased bg-terminal-black text-terminal-white`}>
        {children}
      </body>
    </html>
  )
}
