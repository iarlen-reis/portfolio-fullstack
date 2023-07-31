import {
  createContext,
  useCallback,
  useState,
  ReactNode,
  useContext,
} from 'react'

interface IMenuContext {
  isMobile: boolean
  handleIsMobile: () => void
}

interface IChildren {
  children: ReactNode
}

const MenuContext = createContext<IMenuContext>({
  isMobile: false,
  handleIsMobile: () => ({}),
})

export const MenuProvider = ({ children }: IChildren) => {
  const [isMobile, setIsMobile] = useState(false)

  const handleIsMobile = useCallback(() => {
    setIsMobile(!isMobile)
  }, [isMobile])

  return (
    <MenuContext.Provider value={{ isMobile, handleIsMobile }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => {
  return useContext(MenuContext)
}
