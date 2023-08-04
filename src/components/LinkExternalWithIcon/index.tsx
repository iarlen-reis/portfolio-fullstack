import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

interface ILinkExternalWithIconProps {
  to: string
  icon: LucideIcon | IconType
  backgroundColor?: string
  download?: string
  arialLabel?: string
}
const LinkExternalWithIcon = ({
  to,
  icon: Icon,
  backgroundColor,
  download,
  arialLabel,
}: ILinkExternalWithIconProps) => {
  return (
    <li className="group">
      <a
        aria-label={arialLabel}
        href={to}
        target="_blank"
        rel="noreferrer"
        download={download}
        className={`flex h-9 w-9 items-center justify-center rounded border border-white/40 bg-white text-black transition-all group-hover:${backgroundColor} group-hover:text-white sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:group-hover:translate-y-2`}
      >
        <Icon size={25} strokeWidth={2.3} />
      </a>
    </li>
  )
}

export default LinkExternalWithIcon
