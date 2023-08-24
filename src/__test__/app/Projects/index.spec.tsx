import { render } from '@testing-library/react'
import Projetos from '@/app/projetos/page'
import axios from 'axios'
import 'intersection-observer'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

/*
            title={project.title}
            image={project.image}
            alt={project.alt}
            projectDate={project.projectDate}
            type={project.type}
            deployLink={project.deployLink}
            detailsLink={`/projetos/${project.id}`}

*/

const renderProjetos = async () => {
  const mockProjects = [
    {
      id: '64d055a9ae1316076e7d3c55',
      title: 'BarberShop',
      image:
        'https://raw.githubusercontent.com/iarlen-reis/BarberShop/master/public/Images/Template.png',
      alt: 'Imagem do projeto BarberShop',
      type: 'Aplicação Web',
      deployLink: 'https://www.barbershop.iarlenreis.com.br',
      projectDate: '10 de jul, 2023 - 11 de jul, 2023',
    },
    {
      id: '64d055a9ae1316076e7d3c54',
      title: 'Paquetá Calçados',
      image:
        'https://raw.githubusercontent.com/iarlen-reis/BrChallenges-PaquetaCalcados/master/public/Template.png',
      alt: 'Imagem do ecommerce paquetá Calçados',
      type: 'Aplicação Web',
      deployLink: 'https://www.paqueta-calcados.iarlenreis.com.br',
      projectDate: '21 de jul, 2023 - 26 de jul, 2023',
    },
  ]

  mockedAxios.get.mockResolvedValue({ data: mockProjects })

  const projects = await Projetos()
  return render(projects)
}

describe('Projects page', () => {
  it('should render projects page', async () => {
    const { debug } = await renderProjetos()

    debug()
  })

  it('should have a h1 with text <Projetos>', async () => {
    const { getByRole } = await renderProjetos()

    const h1 = getByRole('heading', { level: 1 })

    expect(h1).toHaveTextContent('Projetos')
  })

  it('should have a link with text <BarberShop> and href <projetos/64d055a9ae1316076e7d3c55>', async () => {
    const { getByRole } = await renderProjetos()

    const projectTitle = getByRole('link', { name: 'BarberShop' })

    expect(projectTitle).toHaveTextContent('BarberShop')

    expect(projectTitle).toHaveAttribute(
      'href',
      '/projetos/64d055a9ae1316076e7d3c55',
    )
  })

  it('should have a imagem with alt <Imagem do projeto BarberShop>', async () => {
    const { getAllByRole } = await renderProjetos()

    const projectImg = getAllByRole('img')[0]

    expect(projectImg).toHaveAttribute('alt', 'Imagem do projeto BarberShop')
  })

  it('should have a text with value <10 de jul, 2023 - 11 de jul, 2023>', async () => {
    const { getByText } = await renderProjetos()

    const projectDate = getByText('10 de jul, 2023 - 11 de jul, 2023')

    expect(projectDate).toBeInTheDocument()
  })

  it('should have a link with text <Detalhes> and href <projetos/64d055a9ae1316076e7d3c55>', async () => {
    const { getAllByRole } = await renderProjetos()

    const projectLink = getAllByRole('link')[1]

    expect(projectLink).toHaveTextContent('Detalhes')

    expect(projectLink).toHaveAttribute(
      'href',
      '/projetos/64d055a9ae1316076e7d3c55',
    )
  })

  it('should have a link with text <Deploy> and href <https://www.barbershop.iarlenreis.com.br>', async () => {
    const { getAllByRole } = await renderProjetos()

    const projectLink = getAllByRole('link')[2]

    expect(projectLink).toHaveTextContent('Deploy')

    expect(projectLink).toHaveAttribute(
      'href',
      'https://www.barbershop.iarlenreis.com.br',
    )
  })

  it('should have a link with text <Paquetá Calçados> and href <projetos/64d055a9ae1316076e7d3c54>', async () => {
    const { getByRole } = await renderProjetos()

    const projectLink = getByRole('link', { name: 'Paquetá Calçados' })

    expect(projectLink).toHaveTextContent('Paquetá Calçados')

    expect(projectLink).toHaveAttribute(
      'href',
      '/projetos/64d055a9ae1316076e7d3c54',
    )
  })

  it('should have a imagem with alt <Imagem do ecommerce paquetá Calçados>', async () => {
    const { getAllByRole } = await renderProjetos()

    const projectImg = getAllByRole('img')[1]

    expect(projectImg).toHaveAttribute(
      'alt',
      'Imagem do ecommerce paquetá Calçados',
    )
  })

  it('should have a text with value <21 de jul, 2023 - 26 de jul, 2023>', async () => {
    const { getByText } = await renderProjetos()

    const projectDate = getByText('21 de jul, 2023 - 26 de jul, 2023')

    expect(projectDate).toBeInTheDocument()
  })

  it('should have a link with text <Detalhes> and href <projetos/64d055a9ae1316076e7d3c54>', async () => {
    const { getAllByRole } = await renderProjetos()

    const projectLink = getAllByRole('link')[4]

    expect(projectLink).toHaveTextContent('Detalhes')

    expect(projectLink).toHaveAttribute(
      'href',
      '/projetos/64d055a9ae1316076e7d3c54',
    )
  })

  it('should have a link with text <Deploy> and href <https://www.paqueta-calcados.iarlenreis.com.br>', async () => {
    const { getAllByRole } = await renderProjetos()

    const projectLink = getAllByRole('link')[5]

    expect(projectLink).toHaveTextContent('Deploy')

    expect(projectLink).toHaveAttribute(
      'href',
      'https://www.paqueta-calcados.iarlenreis.com.br',
    )
  })
})
