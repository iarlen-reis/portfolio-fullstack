'use client'
import {
  Code2Icon,
  HomeIcon,
  PenSquareIcon,
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
} from 'lucide-react'
import LinkNavigation from '../LinkNavigation'
import LinkExternalWithIcon from '../LinkExternalWithIcon'
import { useMenuContext } from '@/contexts/MenuContext'
import Link from 'next/link'
import Image from 'next/image'
import MenuButton from '../Header/MenuButton'

import Logo from '/public/logo-1.png'
const MenuMobile = () => {
  const { isMobile, handleIsMobile } = useMenuContext()
  return (
    <>
      {isMobile && (
        <div className="menu__mobile absolute right-0 top-0 z-10 flex h-screen w-full flex-col bg-black px-4 transition-all md:hidden">
          <div className="mt-3 flex items-center justify-between border-b border-white/20 pb-2">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo de um gato branco com o nome Iarlen Reis escrito do lado"
                width={130}
                height={70}
              />
            </Link>
            <MenuButton />
          </div>
          <nav className="mt-6 flex items-center justify-start border-b border-white/20 pb-5">
            <ul className="flex flex-col items-start justify-center gap-4">
              <li onClick={handleIsMobile}>
                <LinkNavigation name="Página inicial" to="/" icon={HomeIcon} />
              </li>
              <li onClick={handleIsMobile}>
                <LinkNavigation
                  name="Sobre mim"
                  to="/sobre"
                  icon={PenSquareIcon}
                />
              </li>
              <li onClick={handleIsMobile}>
                <LinkNavigation
                  name="Projetos"
                  to="/projetos"
                  icon={Code2Icon}
                />
              </li>
            </ul>
          </nav>
          <ul className="mt-5 flex items-center gap-4">
            <LinkExternalWithIcon
              to="https://github.com/Iarlen-reis"
              icon={GithubIcon}
              arialLabel="Link para o perfil do github do desenvolvedor Iarlen Reis"
              fontSize={30}
              className="flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-zinc-800 text-white focus:opacity-90"
            />
            <LinkExternalWithIcon
              to="https://linkedin.com/in/Iarlen-Reis"
              icon={LinkedinIcon}
              arialLabel="Link para o perfil do Linkedin do desenvolvedor Iarlen Reis"
              fontSize={30}
              className="flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-blue-800 text-white focus:opacity-90"
            />
            <LinkExternalWithIcon
              to="/public/CurriculoIarlenSantosReis.pdf"
              icon={DownloadIcon}
              download="Currículo Iarlen Santos Reis"
              arialLabel="Link para baixar o currículo desenvolvedor Iarlen Reis"
              fontSize={30}
              className="flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-green-500 text-white focus:opacity-90"
            />
          </ul>
        </div>
      )}
    </>
  )
}

export default MenuMobile
