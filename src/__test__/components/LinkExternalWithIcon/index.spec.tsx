import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import LinkExternalWithIcon from '@/components/LinkExternalWithIcon'
import { GithubIcon } from 'lucide-react'

const renderLinkExternalWithIcon = () => {
  return render(
    <LinkExternalWithIcon
      to="https://github.com/Iarlen-reis"
      icon={GithubIcon}
      backgroundColor="bg-zinc-950"
      arialLabel="Link para o perfil do github do desenvolvedor Iarlen Reis"
    />,
  )
}

describe('LinkExternalWithIcon component', () => {
  it('should render LinkExternalWithIcon component', () => {
    renderLinkExternalWithIcon()
  })

  it('should have attribute href with the value https://github.com/Iarlen-reis', () => {
    const { getByRole } = renderLinkExternalWithIcon()

    const href = getByRole('link').getAttribute('href')

    expect(href).toBe('https://github.com/Iarlen-reis')
  })

  it('should have attribute arial label with the text "Link para o perfil do github do desenvolvedor Iarlen Reis', () => {
    const { getByRole } = renderLinkExternalWithIcon()

    const arialLabel = getByRole('link').getAttribute('aria-label')

    const text = 'Link para o perfil do github do desenvolvedor Iarlen Reis'

    expect(arialLabel).toBe(text)
  })

  it('should display a github icon', () => {
    const { getByRole } = renderLinkExternalWithIcon()

    const icon = getByRole('link').querySelector('svg')

    expect(icon).toHaveClass('lucide-github')
  })

  it('should have atribute target with the value _blank', () => {
    const { getByRole } = renderLinkExternalWithIcon()

    const target = getByRole('link').getAttribute('target')

    expect(target).toBe('_blank')
  })

  it('should have backgroundColor with the value bg-zinc-950 on group-hover', () => {
    const { getByRole } = renderLinkExternalWithIcon()

    const backgroundColor = getByRole('link').getAttribute('class')?.split(' ')

    expect(backgroundColor).toContain('group-hover:bg-zinc-950')
  })
})
