import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

// <CHANGE> Added Poppins and Inter fonts for modern aesthetic
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Vatsora Studio – Where Ideas Evolve into Impact',
  description: 'Vatsora Studio is a next-generation digital studio by Sourabh Bhatt, blending creativity, AI, and design to redefine content creation.',
  keywords: 'Vatsora Studio, Sourabh Bhatt, Creative Tech, AI Media, Digital Innovation, Video Editing, Design',
  openGraph: {
    title: 'Vatsora Studio – Where Ideas Evolve into Impact',
    description: 'A next-generation creative and tech brand founded by Sourabh Bhatt, Software Engineer and Founder of Vatsora™.',
    type: 'website',
    url: 'https://vatsora-studio.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vatsora Studio',
    description: 'Where Ideas Evolve into Impact.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}