import MenuButton from './MenuButton'
import MenuMobile from './MenuMobile'

const Header = () => {
  return (
    <header className="relative flex w-full items-center">
      <div className="m-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-5">
        <span className="font-marker text-xl">Iarlen Reis</span>
        <div className="flex items-center">
          <MenuButton />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
