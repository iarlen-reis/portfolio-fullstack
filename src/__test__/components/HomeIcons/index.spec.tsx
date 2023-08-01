import React from 'react'
import { render } from '@testing-library/react'
import HomeIcons from '@/components/HomeIcons'
import '@testing-library/jest-dom'

const renderHomeIcons = () => {
  return render(<HomeIcons />)
}

describe('HomeIcons component', () => {
  it('should render HomeIcons component', () => {
    renderHomeIcons()
  })

  it('should display github icon with href.', () => {
    const { getAllByRole } = renderHomeIcons()

    const githubIcon = getAllByRole('link')[0]

    expect(githubIcon).toHaveAttribute('href', 'https://github.com/iarlen-reis')
  })

  it('should display linkedin icon with href.', () => {
    const { getAllByRole } = renderHomeIcons()

    const githubIcon = getAllByRole('link')[1]

    expect(githubIcon).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/iarlen-reis/',
    )
  })

  it('should display download icon with href.', () => {
    const { getAllByRole } = renderHomeIcons()

    const githubIcon = getAllByRole('link')[2]

    expect(githubIcon).toHaveAttribute(
      'href',
      '/public/CurriculoIarlenSantosReis.pdf',
    )
  })
})
