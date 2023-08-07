import './globals.css'
import type { Metadata } from 'next'
import {
  Permanent_Marker as Marker,
  Poppins,
  Itim,
  Roboto_Mono as Roboto,
} from 'next/font/google'
import Providers from '@/components/Providers'

const marker = Marker({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-title',
})

const itim = Itim({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-subtitle',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Portfólio - Iarlen Reis',
  description: 'Porfolio do desenvolvedor front-end Iarlen Reis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${marker.variable} ${itim.variable} ${roboto.variable} min-w-screen min-h-screen bg-gradient-to-b from-[#011E28] from-25% to-[#050102] to-100% text-zinc-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
