'use client'
import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react'
import LinkExternalWithIcon from '../LinkExternalWithIcon'
import { Slide } from 'react-awesome-reveal'

const HomeIcons = () => {
  return (
    <Slide direction="up" duration={1000} cascade triggerOnce>
      <ul className="flex items-center gap-4" data-testid="home-icons">
        <LinkExternalWithIcon
          to="https://github.com/Iarlen-reis"
          icon={GithubIcon}
          arialLabel="Link para o perfil do github do desenvolvedor Iarlen Reis"
          className="sm:h- sm:w- flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-black text-white transition-all md:border-white/20 md:group-hover:border-white/40 lg:h-12 lg:w-12 lg:group-hover:translate-y-2"
        />
        <LinkExternalWithIcon
          to="https://linkedin.com/in/Iarlen-Reis"
          icon={LinkedinIcon}
          arialLabel="Link para o perfil do Linkedin do desenvolvedor Iarlen Reis"
          className="transition-amd:ll flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-blue-600 text-white transition-all group-hover:border-white/40 sm:h-11 sm:w-11 md:border-white/20 lg:h-12 lg:w-12 lg:group-hover:translate-y-2"
        />
        <LinkExternalWithIcon
          to="/CurrículoIarlenSantosReis.pdf"
          icon={DownloadIcon}
          download="Currículo Iarlen Santos Reis"
          arialLabel="Link para baixar o currículo desenvolvedor Iarlen Reis"
          className="transition-md:all flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-green-600 text-white transition-all group-hover:border-white/40 sm:h-11 sm:w-11 md:border-white/20 lg:h-12 lg:w-12 lg:group-hover:translate-y-2"
        />
      </ul>
    </Slide>
  )
}

export default HomeIcons
