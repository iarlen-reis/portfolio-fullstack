'use client'

import { useMenuContext } from '@/contexts/MenuContext'
import { MenuIcon, X as XIcon } from 'lucide-react'

const MenuButton = () => {
  const { handleIsMobile, isMobile } = useMenuContext()

  return (
    <button className="bg-transparent md:hidden" onClick={handleIsMobile}>
      {isMobile ? (
        <XIcon
          data-testid="close"
          size={25}
          className="text-white transition-colors hover:text-zinc-300"
        />
      ) : (
        <MenuIcon
          data-testid="menu"
          size={25}
          className="text-white transition-colors hover:text-zinc-300"
        />
      )}
    </button>
  )
}

export default MenuButton
