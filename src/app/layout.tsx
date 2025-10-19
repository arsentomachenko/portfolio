import type { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import CustomCursor from '@/components/CustomCursor'
import AudioPlayer from '@/components/AudioPlayer'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Arsen Tomachenko | Portfolio',
  description: 'Web Developer with experience of Digital Concept Arts, Frontend Web Designs. I Love fun Web UI, collaboration and making products.',
  keywords: [
    'arsen tomachenko',
    'arsen tomachenko portfolio',
    'arsentomachenko',
    'frontend developer',
    'web developer',
    'react developer',
    'nextjs developer'
  ],
  authors: [{ name: 'Arsen Tomachenko' }],
  openGraph: {
    title: 'Arsen Tomachenko | Portfolio',
    description: 'Hi! My name is Arsen. I\'m a web developer and digital visual artist. Visit and know about me & my projects/designs.',
    url: 'https://arsentomachenko.site',
    siteName: 'Arsen Tomachenko Portfolio',
    images: [
      {
        url: 'https://www.arsentomachenko.site/src/png/Preview-card-min.png',
        width: 1200,
        height: 630,
        alt: 'Arsen Tomachenko Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsen Tomachenko | Portfolio',
    description: 'Hi! My name is Arsen. I\'m a web developer and digital visual artist.',
    images: ['https://www.arsentomachenko.site/src/png/Preview-card-min.png'],
    creator: '@Arsen_Tomachenko',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable}`}>
        <ThemeProvider>
          <>
            <CustomCursor />
            <AudioPlayer />
            {children}
            <BackToTop />
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}

