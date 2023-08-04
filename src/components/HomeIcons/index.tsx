import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react'
import LinkExternalWithIcon from '../LinkExternalWithIcon'
const HomeIcons = () => {
  return (
    <ul className="flex items-center gap-4" data-testid="home-icons">
      <LinkExternalWithIcon
        to="https://github.com/Iarlen-reis"
        icon={GithubIcon}
        backgroundColor="bg-zinc-950"
        arialLabel="Link para o perfil do github do desenvolvedor Iarlen Reis"
      />
      <LinkExternalWithIcon
        to="https://linkedin.com/in/Iarlen-Reis"
        icon={LinkedinIcon}
        backgroundColor="bg-blue-900"
        arialLabel="Link para o perfil do Linkedin do desenvolvedor Iarlen Reis"
      />
      <LinkExternalWithIcon
        to="/public/CurriculoIarlenSantosReis.pdf"
        icon={DownloadIcon}
        backgroundColor="bg-zinc-950"
        download="Currículo Iarlen Santos Reis"
        arialLabel="Link para baixar o currículo desenvolvedor Iarlen Reis"
      />
    </ul>
  )
}

export default HomeIcons
