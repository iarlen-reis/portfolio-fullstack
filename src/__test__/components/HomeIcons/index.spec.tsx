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

  it('should have link to gitub with href "https://github.com/iarlen-reis".', () => {
    const { getAllByRole } = renderHomeIcons()

    const githubIcon = getAllByRole('link')[0]

    expect(githubIcon).toHaveAttribute('href', 'https://github.com/Iarlen-reis')
  })

  it('should have arial label "Link para o perfil do github do desenvolvedor Iarlen Reis" on github link.', () => {
    const { getAllByRole } = renderHomeIcons()

    const githubIcon = getAllByRole('link')[0]

    expect(githubIcon).toHaveAttribute(
      'aria-label',
      'Link para o perfil do github do desenvolvedor Iarlen Reis',
    )
  })

  it('should have backgroundColor with value "bg-zinc-950" on group-hover github link.', () => {
    const { getAllByRole } = renderHomeIcons()

    const githubIcon = getAllByRole('link')[0]
    const backgroundColor = githubIcon.getAttribute('class')?.split(' ')

    expect(backgroundColor).toContain('group-hover:bg-zinc-950')
  })

  it('should have link to linkedin with href "https://linkedin.com/in/Iarlen-Reis" on linkedin link', () => {
    const { getAllByRole } = renderHomeIcons()

    const linkedinIcon = getAllByRole('link')[1]

    expect(linkedinIcon).toHaveAttribute(
      'href',
      'https://linkedin.com/in/Iarlen-Reis',
    )
  })

  it('should have arial label "Link para o perfil do Linkedin do desenvolvedor Iarlen Reis" on linkedin link', () => {
    const { getAllByRole } = renderHomeIcons()

    const linkedinIcon = getAllByRole('link')[1]

    expect(linkedinIcon).toHaveAttribute(
      'aria-label',
      'Link para o perfil do Linkedin do desenvolvedor Iarlen Reis',
    )
  })

  it('should have backgroundColor with value "bg-blue-800" on group-hover.', () => {
    const { getAllByRole } = renderHomeIcons()

    const linkedinIcon = getAllByRole('link')[1]

    const backgroundColor = linkedinIcon.getAttribute('class')?.split(' ')

    expect(backgroundColor).toContain('group-hover:bg-blue-800')
  })

  it('should have link to download with href "/public/CurriculoIarlenSantosReis.pdf" on download link', () => {
    const { getAllByRole } = renderHomeIcons()

    const downloadIcon = getAllByRole('link')[2]

    expect(downloadIcon).toHaveAttribute(
      'href',
      '/public/CurriculoIarlenSantosReis.pdf',
    )
  })

  it('should have backgroundColor with value "bg-green-500" on group-hover download link.', () => {
    const { getAllByRole } = renderHomeIcons()

    const downloadIcon = getAllByRole('link')[2]
    const backgroundColor = downloadIcon.getAttribute('class')?.split(' ')

    expect(backgroundColor).toContain('group-hover:bg-green-500')
  })
})
