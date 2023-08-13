import { render } from '@testing-library/react'
import ProjectEdit from '@/app/projetos/editar/[id]/page'
import { QueryClient, QueryClientProvider } from 'react-query'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('../../../hooks/useProject', () => ({
  __esModule: true,
  useProject: jest.fn(() => ({
    getProject: jest.fn(),
    editProject: jest.fn(),
    project: {
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
    },
    isEditing: false,
  })),
}))

const renderProjectEdit = () => {
  const queryClient = new QueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      <ProjectEdit params={{ id: '64d055a9ae1316076e7d3c55' }} />
    </QueryClientProvider>,
  )
}

describe('ProjectEdit page', () => {
  it('should render ProjectEdit', () => {
    renderProjectEdit()
  })

  it('should have h1 with text "Editar projeto"', () => {
    const { getByRole } = renderProjectEdit()

    const h1 = getByRole('heading', { name: 'Editar projeto' })

    expect(h1).toBeInTheDocument()
  })

  it('should have a TextField with value "BarberShop"', () => {
    const { getAllByRole } = renderProjectEdit()

    const titleField = getAllByRole('textbox')[0]

    expect(titleField).toHaveAttribute('value', 'BarberShop')
  })

  it('should have a TextField with value "10 de jul, 2023 - 11 de jul, 2023"', () => {
    const { getAllByRole } = renderProjectEdit()

    const projectDateField = getAllByRole('textbox')[1]

    expect(projectDateField).toHaveAttribute(
      'value',
      '10 de jul, 2023 - 11 de jul, 2023',
    )
  })

  it('should have a TextField with value "React, Typescript"', () => {
    const { getAllByRole } = renderProjectEdit()

    const technologyField = getAllByRole('textbox')[2]

    expect(technologyField).toHaveAttribute('value', 'React, Typescript')
  })

  it('should have a TextField with value "Aplicação Web"', () => {
    const { getAllByRole } = renderProjectEdit()

    const typeField = getAllByRole('textbox')[3]

    expect(typeField).toHaveAttribute('value', 'Aplicação Web')
  })

  it('should have a TextField with value "https://raw.githubusercontent.com/iarlen-reis/BarberShop/master/public/Images/Template.png"', () => {
    const { getAllByRole } = renderProjectEdit()

    const imageField = getAllByRole('textbox')[4]

    expect(imageField).toHaveAttribute(
      'value',
      'https://raw.githubusercontent.com/iarlen-reis/BarberShop/master/public/Images/Template.png',
    )
  })

  it('should have a TextField with value "Imagem do ecommerce paquetá Calçados"', () => {
    const { getAllByRole } = renderProjectEdit()

    const altField = getAllByRole('textbox')[5]

    expect(altField).toHaveAttribute(
      'value',
      'Imagem do ecommerce paquetá Calçados',
    )
  })

  it('should have a TextField with value "https://github.com/Iarlen-reis"', () => {
    const { getAllByRole } = renderProjectEdit()

    const githubLinkField = getAllByRole('textbox')[6]

    expect(githubLinkField).toHaveAttribute(
      'value',
      'https://github.com/Iarlen-reis',
    )
  })

  it('should have a TextField with value "https://www.paquetacalcados.com.br"', () => {
    const { getAllByRole } = renderProjectEdit()

    const deployLinkField = getAllByRole('textbox')[7]

    expect(deployLinkField).toHaveAttribute(
      'value',
      'https://www.paquetacalcados.com.br',
    )
  })

  it('should have a TextAreaField with value "Descrição do projeto BarberShop"', () => {
    const { getByText } = renderProjectEdit()

    const descriptionField = getByText('Descrição do projeto BarberShop')

    expect(descriptionField).toBeInTheDocument()
  })

  it('should have a button with text "Limpar"', () => {
    const { getByRole } = renderProjectEdit()

    const button = getByRole('button', { name: 'Limpar' })

    expect(button).toBeInTheDocument()
  })
})
