import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ILinkNavigationProps } from '@/@types/LinkNavigationTypes'

const LinkNavigation = ({ to, icon: Icon, name }: ILinkNavigationProps) => {
  const pathname = usePathname()

  const isActive = pathname === to
  return (
    <Link
      href={to}
      className={`flex items-center justify-center gap-3 hover:animate-pulse ${
        isActive ? 'animate-pulse font-semibold text-white' : 'text-zinc-300'
      }`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-all md:hidden">
        <Icon size={18} className="text-zinc-950" />
      </span>

      <span>{name}</span>
    </Link>
  )
}

export default LinkNavigation
