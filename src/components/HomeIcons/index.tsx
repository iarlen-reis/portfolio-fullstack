import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react'
import LinkExternalWithIcon from '../LinkExternalWithIcon'
const HomeIcons = () => {
  return (
    <ul className="flex items-center gap-4" data-testid="home-icons">
      <LinkExternalWithIcon
        to="https://github.com/Iarlen-reis"
        icon={GithubIcon}
        arialLabel="Link para o perfil do github do desenvolvedor Iarlen Reis"
        className="flex h-9 w-9 items-center justify-center rounded border border-white/40 bg-white text-black transition-all group-hover:bg-zinc-950 group-hover:text-white sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:group-hover:translate-y-2"
      />
      <LinkExternalWithIcon
        to="https://linkedin.com/in/Iarlen-Reis"
        icon={LinkedinIcon}
        arialLabel="Link para o perfil do Linkedin do desenvolvedor Iarlen Reis"
        className="flex h-9 w-9 items-center justify-center rounded border border-white/40 bg-white text-black transition-all group-hover:bg-blue-800 group-hover:text-white sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:group-hover:translate-y-2"
      />
      <LinkExternalWithIcon
        to="/public/CurriculoIarlenSantosReis.pdf"
        icon={DownloadIcon}
        download="Currículo Iarlen Santos Reis"
        arialLabel="Link para baixar o currículo desenvolvedor Iarlen Reis"
        className="flex h-9 w-9 items-center justify-center rounded border border-white/40 bg-white text-black transition-all group-hover:bg-green-500 group-hover:text-white sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:group-hover:translate-y-2"
      />
    </ul>
  )
}

export default HomeIcons
