import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/Header'

describe('Header', () => {
  it('should render header component', () => {
    render(<Header />)
  })

  it('should display the "Iarlen Reis" logo.', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Iarlen Reis')).toBeInTheDocument()
  })
})
