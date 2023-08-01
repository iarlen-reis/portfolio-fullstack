'use client'

import { ReactNode } from 'react'
import { MenuProvider } from '@/contexts/MenuContext'
import Header from './Header'
import Footer from './Footer'

interface IChildren {
  children: ReactNode
}

const Providers = ({ children }: IChildren) => {
  return (
    <MenuProvider>
      <Header />
      <main className="min-h-screen px-4">{children}</main>
      <Footer />
    </MenuProvider>
  )
}

export default Providers
