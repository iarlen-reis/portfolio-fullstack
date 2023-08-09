import { render } from '@testing-library/react'
import Project from '@/app/projetos/[id]/page'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const renderProject = async () => {
  const mockProjectData = {
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

  mockedAxios.get.mockResolvedValue({ data: mockProjectData })

  return await Project({ params: { id: '64d055a9ae1316076e7d3c55' } })
}
describe('Project Component', () => {
  it('renders project data', async () => {
    render(await renderProject())
  })

  it('should render navegation component', async () => {
    const { getByRole } = render(await renderProject())

    const navegation = getByRole('navigation')

    expect(navegation).toBeInTheDocument()
  })

  it('should have a link with link to "projetos"', async () => {
    const { getAllByRole } = render(await renderProject())

    const backToProjects = getAllByRole('link')[0]

    expect(backToProjects).toHaveAttribute('href', '/projetos')
  })

  it('should have a li with text "BarberShop"', async () => {
    const { getAllByRole } = render(await renderProject())

    const projectTitle = getAllByRole('listitem')[2]

    expect(projectTitle).toHaveTextContent('BarberShop')
  })

  it('should have a h1 with text "BarberShop"', async () => {
    const { getByRole } = render(await renderProject())

    const projectTitle = getByRole('heading', {
      name: 'BarberShop',
    })

    expect(projectTitle).toBeInTheDocument()
  })

  it('should text with dates "10 de jul, 2023 - 11 de jul, 2023"', async () => {
    const { getByText } = render(await renderProject())

    const projectDate = getByText('10 de jul, 2023 - 11 de jul, 2023')

    expect(projectDate).toBeInTheDocument()
  })

  it('should render a image with 600 width and 600 height', async () => {
    const { getByRole } = render(await renderProject())

    const image = getByRole('img')

    expect(image).toHaveAttribute('width', '600')
    expect(image).toHaveAttribute('height', '600')
  })

  it('should have border-radius of 6px on the image ', async () => {
    const { getByRole } = render(await renderProject())

    const image = getByRole('img')

    expect(image).toHaveClass('rounded-md')
  })

  it('should have alt "Imagem do ecommerce paquetá Calçados"', async () => {
    const { getByRole } = render(await renderProject())

    const image = getByRole('img')

    expect(image).toHaveAttribute('alt', 'Imagem do ecommerce paquetá Calçados')
  })

  it('should have a link with href to "https://github.com/Iarlen-reis"', async () => {
    const { getAllByRole } = render(await renderProject())

    const githubLink = getAllByRole('link')[1]

    expect(githubLink).toHaveAttribute('href', 'https://github.com/Iarlen-reis')
  })

  it('should have a link with aria-label "Link para github do projeto BarberShop"', async () => {
    const { getAllByRole } = render(await renderProject())

    const githubLink = getAllByRole('link')[1]

    expect(githubLink).toHaveAttribute(
      'aria-label',
      'Link para github do projeto BarberShop',
    )
  })

  it('should have a link to deploy project with href "https://www.paquetacalcados.com.br', async () => {
    const { getAllByRole } = render(await renderProject())

    const deployLink = getAllByRole('link')[2]

    expect(deployLink).toHaveAttribute(
      'href',
      'https://www.paquetacalcados.com.br',
    )
  })

  it('should have a link with aria-label "Link para deploy do projeto BarberShop"', async () => {
    const { getAllByRole } = render(await renderProject())

    const deployLink = getAllByRole('link')[2]

    expect(deployLink).toHaveAttribute(
      'aria-label',
      'Link para deploy do projeto BarberShop',
    )
  })

  it('should display a h2 with text "Tecnologias"', async () => {
    const { getByRole } = render(await renderProject())

    const technologies = getByRole('heading', {
      name: 'Tecnologias',
    })

    expect(technologies).toBeInTheDocument()
  })

  it('should have a li with text "React"', async () => {
    const { getAllByRole } = render(await renderProject())

    const technologies = getAllByRole('listitem')[5]

    expect(technologies).toHaveTextContent('React')
  })

  it('should have a li with text "Typescript"', async () => {
    const { getAllByRole } = render(await renderProject())

    const technologies = getAllByRole('listitem')[6]

    expect(technologies).toHaveTextContent('Typescript')
  })

  it('should display a h2 with text "Detalhes do projeto"', async () => {
    const { getByRole } = render(await renderProject())

    const projectDetails = getByRole('heading', {
      name: 'Detalhes do projeto',
    })

    expect(projectDetails).toBeInTheDocument()
  })

  it('should have a p with text "Descrição do projeto BarberShop"', async () => {
    const { getByText } = render(await renderProject())

    const projectDetails = getByText('Descrição do projeto BarberShop')

    expect(projectDetails).toBeInTheDocument()
  })
})
