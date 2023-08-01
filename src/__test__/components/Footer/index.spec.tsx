import React from 'react'
import { render } from '@testing-library/react'
import Footer from '@/components/Footer'
import '@testing-library/jest-dom'

const renderFooter = () => {
  return render(<Footer />)
}

describe('Footer component', () => {
  it('should render footer component', () => {
    renderFooter()
  })

  it('should display text © 2023 - Iarlen Reis', () => {
    const { getByText } = renderFooter()

    const text = getByText('© 2023 - Iarlen Reis')

    expect(text).toBeInTheDocument()
  })

  it('should display link to github', () => {
    const { getByRole } = renderFooter()

    const text = getByRole('link')

    expect(text).toHaveAttribute('href', 'https://github.com/Iarlen-reis')
  })
})
