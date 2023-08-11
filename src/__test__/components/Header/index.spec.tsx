import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/Header'

describe('Header', () => {
  it('should render header component', () => {
    render(<Header />)
  })

  it('should display logo', () => {
    const { getByRole } = render(<Header />)

    const logo = getByRole('img')

    expect(logo).toBeInTheDocument()
  })

  it('should have a href with value "/" on logo', () => {
    const { getByRole } = render(<Header />)

    const logo = getByRole('link', { name: 'logo' })

    expect(logo).toHaveAttribute('href', '/')
  })

  it('should have a alt with value "logo" on logo', () => {
    const { getByRole } = render(<Header />)

    const logo = getByRole('img')

    expect(logo).toHaveAttribute('alt', 'logo')
  })

  it('should have link with href "/" and name "Página inicial"', () => {
    const { getByRole } = render(<Header />)

    const link = getByRole('link', { name: 'Página inicial' })

    expect(link).toHaveAttribute('href', '/')
  })

  it('should have link with href "/sobre" and name "Sobre mim"', () => {
    const { getByRole } = render(<Header />)

    const link = getByRole('link', { name: 'Sobre mim' })

    expect(link).toHaveAttribute('href', '/sobre')
  })

  it('should have link with href "/projetos" and name "Projetos"', () => {
    const { getByRole } = render(<Header />)

    const link = getByRole('link', { name: 'Projetos' })

    expect(link).toHaveAttribute('href', '/projetos')
  })
})
