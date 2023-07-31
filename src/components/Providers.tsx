'use client'

import { ReactNode } from 'react'
import { MenuProvider } from '@/contexts/MenuContext'

interface IChildren {
  children: ReactNode
}

const Providers = ({ children }: IChildren) => {
  return (
    <main>
      <MenuProvider>{children}</MenuProvider>
    </main>
  )
}

export default Providers
