import MenuButton from './MenuButton'
import MenuASide from './MenuSide'

const Header = () => {
  return (
    <header className="relative flex w-full items-center">
      <div className="flex w-full items-center justify-between px-4 py-5">
        <span className="font-marker text-xl">Iarlen Reis</span>
        <div className="flex items-center">
          <MenuButton />
        </div>
      </div>
      <MenuASide />
    </header>
  )
}

export default Header
