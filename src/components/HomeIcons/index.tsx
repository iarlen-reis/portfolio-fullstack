import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react'
const HomeIcons = () => {
  return (
    <div className="flex items-center gap-4" data-testid="home-icons">
      <a
        href="https://github.com/iarlen-reis"
        target="_blank"
        rel="noreferrer"
        className="group flex h-9 w-9 items-center justify-center rounded border border-white/40 bg-white transition-all hover:bg-zinc-950 sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:hover:rotate-45"
      >
        <GithubIcon
          size={25}
          strokeWidth={2.3}
          className="text-black transition-colors group-hover:text-white"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/iarlen-reis/"
        target="_blank"
        rel="noreferrer"
        className="group flex h-9 w-9 items-center justify-center rounded border border-white/40 bg-white transition-all hover:bg-blue-900 sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:hover:rotate-45"
      >
        <LinkedinIcon
          size={25}
          strokeWidth={2.3}
          className="text-black transition-colors group-hover:text-white"
        />
      </a>
      <a
        href="/public/CurriculoIarlenSantosReis.pdf"
        download="Currículo Iarlen Santos Reis"
        className="group flex h-9 w-9 items-center justify-center rounded border border-white/40 bg-white transition-all hover:bg-sky-500 sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:hover:rotate-45"
      >
        <DownloadIcon
          size={25}
          strokeWidth={2.3}
          className="text-black transition-colors group-hover:text-white"
        />
      </a>
    </div>
  )
}

export default HomeIcons
