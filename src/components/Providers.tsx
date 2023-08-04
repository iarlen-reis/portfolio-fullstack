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
      <main className="m-auto min-h-screen w-full max-w-[1280px] px-4">
        {children}
      </main>
      <Footer />
    </MenuProvider>
  )
}

export default Providers
