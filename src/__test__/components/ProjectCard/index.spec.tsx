import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectCard from '@/components/ProjectCard'

const renderProjectCard = () => {
  return render(
    <ProjectCard
      image="https://raw.githubusercontent.com/iarlen-reis/BrChallenges-PaquetaCalcados/master/public/Template.png"
      alt="Imagem do ecommerce paquetá Calçados"
      title="Paquetá Calçados"
      projectDate="10 de jul, 2023 - 11 de jul, 2023"
      deployLink="https://www.paquetacalcados.com.br"
      detailsLink="projetos/1"
    />,
  )
}

describe('ProjectCard component', () => {
  it('should render project card component', () => {
    renderProjectCard()
  })

  it('should have a src on the image', () => {
    const { getByRole } = renderProjectCard()

    const image = getByRole('img')

    expect(image).toHaveAttribute('src')
  })

  it('should have a alt on the image with value <Imagem do ecommerce paquetá Calçados>', () => {
    const { getByRole } = renderProjectCard()

    const image = getByRole('img')

    expect(image).toHaveAttribute('alt', 'Imagem do ecommerce paquetá Calçados')
  })

  it('should have title with value <Paquetá Calçados>', () => {
    const { getByText } = renderProjectCard()

    const title = getByText('Paquetá Calçados')

    expect(title).toBeInTheDocument()
  })

  it('should have project date with value <10 de jul, 2023 - 11 de jul, 2023>', () => {
    const { getByText } = renderProjectCard()

    const projectDate = getByText('10 de jul, 2023 - 11 de jul, 2023')

    expect(projectDate).toBeInTheDocument()
  })

  it('should have deploy link with value <https://www.paquetacalcados.com.br>', () => {
    const { getAllByRole } = renderProjectCard()

    const deployLink = getAllByRole('link')[0]

    expect(deployLink).toHaveAttribute(
      'href',
      'https://www.paquetacalcados.com.br',
    )
  })

  it('should have details link with value <projetos/1>', () => {
    const { getAllByRole } = renderProjectCard()

    const detailsLink = getAllByRole('link')[1]

    expect(detailsLink).toHaveAttribute('href', 'projetos/1')
  })
})
