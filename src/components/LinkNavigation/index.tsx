import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'

interface ILinkNavigationProps {
  to: string
  icon: LucideIcon
  name: string
}

const LinkNavigation = ({ to, icon: Icon, name }: ILinkNavigationProps) => {
  const pathname = usePathname()
  return (
    <Link href={to} className="flex items-center justify-center gap-2">
      <span
        className={
          pathname === to
            ? 'font-poppins text-yellow-400'
            : 'font-poppins text-white'
        }
      >
        {name}
      </span>
      <Icon
        size={20}
        className={pathname === to ? 'text-yellow-400' : 'text-white'}
      />
    </Link>
  )
}

export default LinkNavigation
