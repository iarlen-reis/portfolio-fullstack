import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

interface ILinkExternalWithIconProps {
  to: string
  icon: LucideIcon | IconType
  className?: string
  backgroundColor?: string
  download?: string
  arialLabel?: string
  fontSize?: number
  colorIcon?: string
}
const LinkExternalWithIcon = ({
  to,
  icon: Icon,
  download,
  arialLabel,
  fontSize,
  colorIcon,
  className,
}: ILinkExternalWithIconProps) => {
  return (
    <li className="group">
      <a
        aria-label={arialLabel}
        href={to}
        target="_blank"
        rel="noreferrer"
        download={download}
        className={className}
      >
        <Icon strokeWidth={2.3} color={colorIcon} fontSize={fontSize} />
      </a>
    </li>
  )
}

export default LinkExternalWithIcon
