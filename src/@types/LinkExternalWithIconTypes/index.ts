import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

export interface ILinkExternalWithIconProps {
  to: string
  icon: LucideIcon | IconType
  className?: string
  backgroundColor?: string
  download?: string
  arialLabel?: string
  fontSize?: number
  colorIcon?: string
}
