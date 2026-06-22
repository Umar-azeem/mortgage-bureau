import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav'
import Footer from '@/components/footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/img/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/img/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/img/logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/img/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'white' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar/>
      <body className="font-sans antialiased bg-white">
        
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      <Footer/>
    </html>
  )
}
