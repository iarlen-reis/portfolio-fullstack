import { render } from '@testing-library/react'
import ProjectDescription from '@/components/ProjectDescription'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderProjectDescription = () => {
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
  return render(<ProjectDescription project={project} />)
}

describe('ProjectDescription component', () => {
  it('should render project description', () => {
    renderProjectDescription()
  })

  it('should have a h2 with text "Detalhes do projeto"', () => {
    const { getByRole } = renderProjectDescription()

    expect(
      getByRole('heading', { name: 'Detalhes do projeto' }),
    ).toBeInTheDocument()
  })

  it('should have a description with value "Descrição do projeto BarberShop"', () => {
    const { getByText } = renderProjectDescription()

    expect(getByText('Descrição do projeto BarberShop')).toBeInTheDocument()
  })
})
