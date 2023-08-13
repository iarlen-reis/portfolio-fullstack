import { ILinkExternalWithIconProps } from '@/@types/LinkExternalWithIconTypes'

const LinkExternalWithIcon = ({
  to,
  icon: Icon,
  download,
  arialLabel,
  colorIcon,
  className,
  fontSize = 45,
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
        <Icon color={colorIcon} fontSize={fontSize} />
      </a>
    </li>
  )
}

export default LinkExternalWithIcon
