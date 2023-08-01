import React from 'react'
import { render } from '@testing-library/react'
import MenuASide from '@/components/Header/MenuSide'
import { MenuContext } from '@/contexts/MenuContext'
import '@testing-library/jest-dom'

const renderMenuAside = (isVisible: boolean) => {
  return render(
    <MenuContext.Provider
      value={{ isMobile: isVisible, handleIsMobile: () => ({}) }}
    >
      <MenuASide />
    </MenuContext.Provider>,
  )
}

describe('MenuAside component', () => {
  it('should not render MenuAside component.', () => {
    const { queryByTestId } = renderMenuAside(false)

    const menuAside = queryByTestId('aside')

    expect(menuAside).not.toBeInTheDocument()
  })

  it('should render MenuAside component.', () => {
    const { getByTestId } = renderMenuAside(true)

    const menuAside = getByTestId('aside')

    expect(menuAside).toBeInTheDocument()
  })

  it('should display the link to /.', () => {
    const { getAllByRole } = renderMenuAside(true)

    const linkHome = getAllByRole('link')[0]

    expect(linkHome).toHaveAttribute('href', '/')
  })

  it('should display the link to /sobre.', () => {
    const { getAllByRole } = renderMenuAside(true)

    const linkAbout = getAllByRole('link')[1]

    expect(linkAbout).toHaveAttribute('href', '/sobre')
  })

  it('should display the link to /projetos.', () => {
    const { getAllByRole } = renderMenuAside(true)

    const linkProjects = getAllByRole('link')[2]

    expect(linkProjects).toHaveAttribute('href', '/projetos')
  })
})
