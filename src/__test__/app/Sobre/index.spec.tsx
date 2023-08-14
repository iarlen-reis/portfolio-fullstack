import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'intersection-observer'
import Sobre from '@/app/sobre/page'

const renderSobre = () => {
  return render(<Sobre />)
}

describe('Sobre component', () => {
  it('should render Sobre component', () => {
    renderSobre()
  })

  it('should display AboutMeInformation component', () => {
    const { getByTestId } = renderSobre()

    expect(getByTestId('about-me-information')).toBeInTheDocument()
  })

  it('should display LanguageIcons component', () => {
    const { getByTestId } = renderSobre()

    expect(getByTestId('language-icons')).toBeInTheDocument()
  })

  it('should display FrameWorkIcons component', () => {
    const { getByTestId } = renderSobre()

    expect(getByTestId('framework-icons')).toBeInTheDocument()
  })

  it('should display DatabaseIcons component', () => {
    const { getByTestId } = renderSobre()

    expect(getByTestId('database-icons')).toBeInTheDocument()
  })

  it('should display AboutMeInformation, LanguageIcons, FrameWorkIcons and DatabaseIcons component', () => {
    const { getByTestId } = renderSobre()

    expect(getByTestId('about-me-information')).toBeInTheDocument()
    expect(getByTestId('language-icons')).toBeInTheDocument()
    expect(getByTestId('framework-icons')).toBeInTheDocument()
    expect(getByTestId('database-icons')).toBeInTheDocument()
  })
})
