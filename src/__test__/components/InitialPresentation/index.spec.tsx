import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import InitialPresentation from '@/components/InitialPresentation'

const renderInitialPresentation = () => {
  return render(<InitialPresentation />)
}

describe('InitialPresentation component', () => {
  it('should render InitialPresentation component', () => {
    renderInitialPresentation()
  })

  it('should display first span with text "Olá, eu sou" component', () => {
    const { getByText } = renderInitialPresentation()

    const firstSpan = getByText('Olá, eu sou')

    expect(firstSpan).toBeInTheDocument()
  })

  it('should display h1 with text "Iarlen Reis" component', () => {
    const { getByRole } = renderInitialPresentation()

    const h1Text = getByRole('heading', { name: 'Iarlen Reis' })

    expect(h1Text).toBeInTheDocument()
  })

  it('should display second span with text "Desenvolvedor Front-end" component', () => {
    const { getByText } = renderInitialPresentation()

    const secondSpan = getByText('Desenvolvedor Front-end')

    expect(secondSpan).toBeInTheDocument()
  })
})
