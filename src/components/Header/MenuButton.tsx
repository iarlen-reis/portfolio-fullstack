'use client'

import { useMenuContext } from '@/contexts/MenuContext'
import { MenuIcon, X as XIcon } from 'lucide-react'

const MenuButton = () => {
  const { handleIsMobile, isMobile } = useMenuContext()

  return (
    <button className="bg-transparent" onClick={handleIsMobile}>
      {isMobile ? (
        <XIcon
          size={25}
          className="text-white transition-colors hover:text-zinc-300"
        />
      ) : (
        <MenuIcon
          size={25}
          className="text-white transition-colors hover:text-zinc-300"
        />
      )}
    </button>
  )
}

export default MenuButton
