import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MenuMobile from '@/components/MenuMobile'
import { MenuContext } from '@/contexts/MenuContext'
const renderMenuMobile = () => {
  return render(
    <MenuContext.Provider
      value={{ isMobile: true, handleIsMobile: () => ({}) }}
    >
      <MenuMobile />
    </MenuContext.Provider>,
  )
}

describe('MenuMobile component', () => {
  it('should render MenuMobile component', () => {
    renderMenuMobile()
  })

  it('should display logo', () => {
    const { getByRole } = renderMenuMobile()

    const logo = getByRole('img')

    expect(logo).toBeInTheDocument()
  })

  it('should have a href with value "/" on logo', () => {
    const { getByRole } = renderMenuMobile()

    const logo = getByRole('link', {
      name: 'logo de um gato branco com o nome Iarlen Reis escrito do lado',
    })

    expect(logo).toHaveAttribute('href', '/')
  })

  it('should have a alt with value "logo" on logo', () => {
    const { getByRole } = renderMenuMobile()

    const logo = getByRole('img')

    expect(logo).toHaveAttribute(
      'alt',
      'logo de um gato branco com o nome Iarlen Reis escrito do lado',
    )
  })

  it('should have a link with href "/" and name "Página inicial"', () => {
    const { getByRole } = renderMenuMobile()

    const logo = getByRole('link', { name: 'Página inicial' })

    expect(logo).toHaveAttribute('href', '/')
  })

  it('should have a link with href "/sobre" and name "Sobre mim"', () => {
    const { getByRole } = renderMenuMobile()

    const logo = getByRole('link', { name: 'Sobre mim' })

    expect(logo).toHaveAttribute('href', '/sobre')
  })

  it('should have a link with href "/projetos" and name "Projetos"', () => {
    const { getByRole } = renderMenuMobile()

    const logo = getByRole('link', { name: 'Projetos' })

    expect(logo).toHaveAttribute('href', '/projetos')
  })

  it('should have the logo and all links', () => {
    const { getByRole } = renderMenuMobile()

    const logo = getByRole('img')
    const homeLink = getByRole('link', { name: 'Página inicial' })
    const aboutLink = getByRole('link', { name: 'Sobre mim' })
    const projectsLink = getByRole('link', { name: 'Projetos' })

    expect(logo).toBeInTheDocument()
    expect(homeLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(projectsLink).toBeInTheDocument()
  })
})
