import LinkNavigation from '../LinkNavigation'
import { HomeIcon, PenSquareIcon, Code2Icon } from 'lucide-react'
import MenuButton from './MenuButton'
import MenuMobile from '../MenuMobile'
import Logo from '/public/logo-1.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="relative flex w-full items-center">
      <div className="m-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-3">
        <Image src={Logo} alt="logo" width={130} height={70} />
        <nav className="hidden md:flex">
          <ul className="flex flex-row items-center gap-6">
            <li>
              <LinkNavigation name="Página inicial" to="/" icon={HomeIcon} />
            </li>
            <li>
              <LinkNavigation
                name="Sobre mim"
                to="/sobre"
                icon={PenSquareIcon}
              />
            </li>
            <li>
              <LinkNavigation name="Projetos" to="/projetos" icon={Code2Icon} />
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <MenuButton />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
