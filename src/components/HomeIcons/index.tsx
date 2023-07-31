import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react'
const HomeIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://github.com/IarlenReis"
        target="_blank"
        rel="noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-white transition-colors hover:bg-zinc-950"
      >
        <GithubIcon
          size={25}
          strokeWidth={2.5}
          className="text-black transition-colors group-hover:text-white"
        />
      </a>
      <a
        href="https://github.com/IarlenReis"
        target="_blank"
        rel="noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-white transition-colors hover:bg-blue-900"
      >
        <LinkedinIcon
          size={25}
          strokeWidth={2.5}
          className="text-black transition-colors group-hover:text-white"
        />
      </a>
      <a
        href="https://github.com/IarlenReis"
        target="_blank"
        rel="noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-white transition-colors hover:bg-zinc-500"
      >
        <DownloadIcon
          size={25}
          strokeWidth={2.5}
          className="text-black transition-colors group-hover:text-white"
        />
      </a>
    </div>
  )
}

export default HomeIcons
