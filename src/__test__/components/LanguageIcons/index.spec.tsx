import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import LanguageIcons from '@/components/LanguageIcons'

const renderLanguageIcons = () => {
  return render(<LanguageIcons />)
}

describe('LanguageIcons component', () => {
  it('should render LanguageIcons component', () => {
    renderLanguageIcons()
  })

  it('should display the "Typescript" icon with href.', () => {
    const { getAllByRole } = renderLanguageIcons()

    const typescriptIcon = getAllByRole('link')[0]

    expect(typescriptIcon).toHaveAttribute(
      'href',
      'https://www.typescriptlang.org/',
    )
  })

  it('should display the "Javascript" icon with href.', () => {
    const { getAllByRole } = renderLanguageIcons()

    const javascriptIcon = getAllByRole('link')[1]

    expect(javascriptIcon).toHaveAttribute(
      'href',
      'https://www.javascript.com/',
    )
  })

  it('should display the "NodeJs" icon with href.', () => {
    const { getAllByRole } = renderLanguageIcons()

    const nodeIcon = getAllByRole('link')[2]

    expect(nodeIcon).toHaveAttribute('href', 'https://nodejs.org/en')
  })

  it('should display the "HTML" icon with href.', () => {
    const { getAllByRole } = renderLanguageIcons()

    const htmlIcon = getAllByRole('link')[3]

    expect(htmlIcon).toHaveAttribute('href', 'https://html.com/')
  })

  it('should display the "CSS" icon with href.', () => {
    const { getAllByRole } = renderLanguageIcons()

    const cssIcon = getAllByRole('link')[4]

    expect(cssIcon).toHaveAttribute(
      'href',
      'https://www.w3.org/Style/CSS/Overview.en.html',
    )
  })
})
