import { render } from '@testing-library/react'
import ProjectContent from '@/components/ProjectContent'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderProjectContent = () => {
  const project = {
    id: '64d055a9ae1316076e7d3c55',
    title: 'BarberShop',
    description: 'Descrição do projeto BarberShop',
    image:
      'https://raw.githubusercontent.com/iarlen-reis/BarberShop/master/public/Images/Template.png',
    deployLink: 'https://www.paquetacalcados.com.br',
    githubLink: 'https://github.com/Iarlen-reis',
    projectDate: '10 de jul, 2023 - 11 de jul, 2023',
    type: 'Aplicação Web',
    technology: 'React, Typescript',
    alt: 'Imagem do ecommerce paquetá Calçados',
  }
  return render(<ProjectContent project={project} />)
}

describe('ProjectContent component', () => {
  it('should render ProjectContent component', () => {
    renderProjectContent()
  })

  it('should have a image with alt value "Imagem do ecommerce paquetá Calçados"', () => {
    const { getByRole } = renderProjectContent()

    const image = getByRole('img')

    expect(image).toHaveAttribute('alt', 'Imagem do ecommerce paquetá Calçados')
  })

  it('should have a link to github with href "https://github.com/Iarlen-reis"', () => {
    const { getAllByRole } = renderProjectContent()

    const githubLink = getAllByRole('link')[0]

    expect(githubLink).toHaveAttribute('href', 'https://github.com/Iarlen-reis')
  })

  it('should have a link to deploy with href "https://www.paquetacalcados.com.br"', () => {
    const { getAllByRole } = renderProjectContent()

    const deployLink = getAllByRole('link')[1]

    expect(deployLink).toHaveAttribute(
      'href',
      'https://www.paquetacalcados.com.br',
    )
  })
})
