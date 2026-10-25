import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mthiyalaunchkit.com'),
  title: {
    default: 'Mthiya LaunchKit V1 — Ambition. Vision. Idea. Launch.',
    template: '%s | Mthiya LaunchKit',
  },
  description:
    'Mthiya LaunchKit V1 gives your next big idea a clear, focused path from first thought to launch day.',
  applicationName: 'Mthiya LaunchKit',
  creator: 'Mthiya LaunchKit',
  publisher: 'Mthiya LaunchKit',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.mthiyalaunchkit.com',
    siteName: 'Mthiya LaunchKit',
    title: 'Mthiya LaunchKit V1 — Ambition. Vision. Idea. Launch.',
    description:
      'A clear, focused path from first thought to launch day with Mthiya LaunchKit V1.',
  },
  twitter: {
    card: 'summary',
    title: 'Mthiya LaunchKit V1 — Ambition. Vision. Idea. Launch.',
    description:
      'A clear, focused path from first thought to launch day with Mthiya LaunchKit V1.',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#0c1913',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
