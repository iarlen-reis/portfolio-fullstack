import { render } from '@testing-library/react'
import ProjectTechnologys from '@/components/ProjectTechnologys'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderProjectTechnologys = () => {
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
  return render(<ProjectTechnologys project={project} />)
}

describe('ProjectTechnologys component', () => {
  it('should render ProjectTechnologys component', () => {
    renderProjectTechnologys()
  })

  it('should have a h2 with text with value "Tecnologias"', () => {
    const { getByRole } = renderProjectTechnologys()

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Tecnologias')
  })

  it('should have a text with value "React"', () => {
    const { getByText } = renderProjectTechnologys()

    expect(getByText('React')).toBeInTheDocument()
  })

  it('should have a text with value "Typescript"', () => {
    const { getByText } = renderProjectTechnologys()

    expect(getByText('Typescript')).toBeInTheDocument()
  })
})
