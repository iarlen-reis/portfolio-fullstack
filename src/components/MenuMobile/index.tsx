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
import Image from 'next/image'
import Logo from '/public/logo-1.png'
const MenuMobile = () => {
  const { isMobile } = useMenuContext()
  return (
    <>
      {isMobile && (
        <div className="absolute right-0 top-[67px] flex h-screen w-[300px] flex-col divide-y divide-white/20 bg-black px-5 md:hidden">
          <div className="py-4">
            <Image src={Logo} alt="logo" width={120} height={70} />
          </div>
          <nav className="flex items-center justify-start py-4">
            <ul className="flex flex-col items-start justify-start gap-4">
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
                <LinkNavigation
                  name="Projetos"
                  to="/projetos"
                  icon={Code2Icon}
                />
              </li>
            </ul>
          </nav>
          <ul className="flex items-center gap-4 py-4">
            <LinkExternalWithIcon
              to="https://github.com/Iarlen-reis"
              icon={GithubIcon}
              arialLabel="Link para o perfil do github do desenvolvedor Iarlen Reis"
              fontSize={30}
              className="flex h-8 w-8 items-center justify-center rounded border border-white/40 bg-white text-black transition-all group-hover:bg-zinc-950 group-hover:text-white"
            />
            <LinkExternalWithIcon
              to="https://linkedin.com/in/Iarlen-Reis"
              icon={LinkedinIcon}
              arialLabel="Link para o perfil do Linkedin do desenvolvedor Iarlen Reis"
              fontSize={30}
              className="flex h-8 w-8 items-center justify-center rounded border border-white/40 bg-white text-black transition-all group-hover:bg-blue-800 group-hover:text-white"
            />
            <LinkExternalWithIcon
              to="/public/CurriculoIarlenSantosReis.pdf"
              icon={DownloadIcon}
              download="Currículo Iarlen Santos Reis"
              arialLabel="Link para baixar o currículo desenvolvedor Iarlen Reis"
              fontSize={30}
              className="flex h-8 w-8 items-center justify-center rounded border border-white/40 bg-white text-black transition-all group-hover:bg-green-500 group-hover:text-white"
            />
          </ul>
        </div>
      )}
    </>
  )
}

export default MenuMobile
