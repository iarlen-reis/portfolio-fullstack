'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MenuProvider } from '@/contexts/MenuContext'
import Header from './Header'
import Footer from './Footer'

interface IChildren {
  children: ReactNode
}

const Providers = ({ children }: IChildren) => {
  const queryClient = new QueryClient()
  return (
    <MenuProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className="m-auto min-h-screen w-full max-w-[1280px] px-4">
          {children}
        </main>
        <Footer />
      </QueryClientProvider>
    </MenuProvider>
  )
}

export default Providers
