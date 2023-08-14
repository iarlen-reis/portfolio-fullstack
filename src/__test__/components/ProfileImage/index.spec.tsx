import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'intersection-observer'
import ProfileImage from '@/components/ProfileImage'

const renderProfileImage = () => {
  return render(<ProfileImage />)
}

describe('ProfileImage component', () => {
  it('should render ProfileImage component', () => {
    renderProfileImage()
  })

  it('should display the Image', () => {
    const { getByRole } = renderProfileImage()

    const image = getByRole('img')

    expect(image).toBeInTheDocument()
  })

  it('should display with resolution 600', () => {
    const { getByRole } = renderProfileImage()

    const image = getByRole('img')

    expect(image).toHaveAttribute('width', '600')
  })

  it('should display with height 600', () => {
    const { getByRole } = renderProfileImage()

    const image = getByRole('img')

    expect(image).toHaveAttribute('height', '600')
  })
})
