import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'intersection-observer'
import Home from '@/app/page'

const renderHome = () => {
  return render(<Home />)
}

describe('Home page', () => {
  it('should render home page', () => {
    renderHome()
  })

  it('should display InitialPresentation component', () => {
    const { getByTestId } = renderHome()

    const initialPresentation = getByTestId('initial-presentation')

    expect(initialPresentation).toBeInTheDocument()
  })

  it('should display HomeIcons component', () => {
    const { getByTestId } = renderHome()

    const homeIcons = getByTestId('home-icons')

    expect(homeIcons).toBeInTheDocument()
  })

  it('should display ProfileImage component', () => {
    const { getByRole } = renderHome()

    const profileImage = getByRole('img')

    expect(profileImage).toBeInTheDocument()
  })

  it('should display InitialPresentation, ProfileImage, HomeIcons components', () => {
    const { getByTestId, getByRole } = renderHome()

    expect(getByTestId('initial-presentation')).toBeInTheDocument()
    expect(getByRole('img')).toBeInTheDocument()
    expect(getByTestId('home-icons')).toBeInTheDocument()
  })
})
