'use client'

import { useMenuContext } from '@/contexts/MenuContext'
import { InfoIcon, ScrollText, HomeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MenuASide = () => {
  const { isMobile, handleIsMobile } = useMenuContext()
  const pathname = usePathname()

  return (
    <>
      {isMobile && (
        <aside
          data-testid="aside"
          className="absolute bottom-[-500px] left-1/2 z-10 w-52 -translate-x-1/2 transform rounded-md border border-white/40 bg-white/5 px-3 py-4 sm:bottom-[-400px] sm:left-auto sm:right-4 sm:h-52 sm:w-12 sm:-translate-x-0"
        >
          <ul className="flex h-full items-center justify-between gap-4 sm:flex-col">
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
              <Link href="/sobre">
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
              <Link href="/projetos">
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

export default MenuASide
