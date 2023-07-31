'use client'

import { useMenuContext } from '@/contexts/MenuContext'
import { InfoIcon, ScrollText, HomeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MenuSide = () => {
  const { isMobile, handleIsMobile } = useMenuContext()
  const pathname = usePathname()

  return (
    <>
      {isMobile && (
        <aside className="absolute right-3 top-36 z-10 h-52 rounded-md border border-white/40 bg-white/5 px-2 py-4">
          <ul className="flex h-full flex-col items-center justify-between gap-4">
            <li onClick={handleIsMobile}>
              <Link href="/">
                <HomeIcon
                  size={25}
                  className={
                    pathname === '/'
                      ? 'animate-pulse text-white'
                      : 'text-white/60'
                  }
                />
              </Link>
            </li>
            <li onClick={handleIsMobile}>
              <Link href="/">
                <InfoIcon
                  size={25}
                  className={
                    pathname === '/sobre'
                      ? 'animate-pulse text-white'
                      : 'text-white/60'
                  }
                />
              </Link>
            </li>
            <li onClick={handleIsMobile}>
              <Link href="/">
                <ScrollText
                  size={25}
                  className={
                    pathname === '/projetos'
                      ? 'animate-pulse text-white'
                      : 'text-white/60'
                  }
                />
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  )
}

export default MenuSide
