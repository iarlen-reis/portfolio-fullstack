import React from 'react'
import { render } from '@testing-library/react'
import PageNavigation from '@/components/PageNavigation'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderPageNavigation = () => {
  return render(
    <PageNavigation from="BarberShop" to="Página inicial" link="/" />,
  )
}

describe('PageNavigation component', () => {
  it('should render PageNavigation component', () => {
    renderPageNavigation()
  })

  it('should display a text "BarberShop"', () => {
    const { getByText } = renderPageNavigation()

    const text = getByText('BarberShop')

    expect(text).toBeInTheDocument()
  })

  it('should display a text "Página inicial"', () => {
    const { getByText } = renderPageNavigation()

    const text = getByText('Página inicial')

    expect(text).toBeInTheDocument()
  })

  it('should display a link with href "/"', () => {
    const { getByRole } = renderPageNavigation()

    const link = getByRole('link')

    expect(link).toHaveAttribute('href', '/')
  })
})
