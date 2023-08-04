'use client'

import { useMenuContext } from '@/contexts/MenuContext'
import { InfoIcon, ScrollText, HomeIcon } from 'lucide-react'
import LinkNavigation from '../LinkNavigation'

const MenuMobile = () => {
  const { isMobile, handleIsMobile } = useMenuContext()

  return (
    <>
      {isMobile ? (
        <div className="absolute bottom-0 left-0 right-0 top-[69px] h-screen bg-black md:relative md:top-0 md:h-full md:bg-transparent">
          <nav className="m-auto flex items-center  justify-center">
            <ul className="mt-[35%] flex flex-col items-center gap-4 md:mt-0 md:flex-row">
              <li onClick={handleIsMobile}>
                <LinkNavigation to="/" name="Página Inicial" icon={HomeIcon} />
              </li>
              <li onClick={handleIsMobile}>
                <LinkNavigation to="/sobre" name="Sobre" icon={InfoIcon} />
              </li>
              <li onClick={handleIsMobile}>
                <LinkNavigation
                  to="/projetos"
                  name="Projetos"
                  icon={ScrollText}
                />
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="hidden md:flex">
          <nav className="flex items-center">
            <ul className="flex items-center gap-4">
              <li>
                <LinkNavigation to="/" name="Página Inicial" icon={HomeIcon} />
              </li>
              <li>
                <LinkNavigation to="/sobre" name="Sobre" icon={InfoIcon} />
              </li>
              <li>
                <LinkNavigation
                  to="/projetos"
                  name="Projetos"
                  icon={ScrollText}
                />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default MenuMobile
