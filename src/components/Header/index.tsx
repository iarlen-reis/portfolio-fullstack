import MenuButton from './MenuButton'
import MenuSide from './MenuSide'

const Header = () => {
  return (
    <header className="relative flex w-full items-center border-b border-zinc-50/40">
      <div className="flex w-full items-center justify-between p-3 px-4">
        <span className="font-marker">Iarlen Reis</span>
        <div className="flex items-center">
          <MenuButton />
        </div>
      </div>
      <MenuSide />
    </header>
  )
}

export default Header
