import { fireEvent, render } from '@testing-library/react'
import Criar from '@/app/criar/page'
import { QueryClient, QueryClientProvider } from 'react-query'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

const renderCriar = () => {
  const queryClient = new QueryClient()

  return render(
    <QueryClientProvider client={queryClient}>
      <Criar />
    </QueryClientProvider>,
  )
}

describe('Criar page', () => {
  it('should render Criar page', () => {
    renderCriar()
  })

  it('should display h1 with text "Criar projeto"', () => {
    const { getByRole } = renderCriar()

    const pageTitle = getByRole('heading', { level: 1 })

    expect(pageTitle).toBeInTheDocument()
  })

  it('should have a InputField with name "title""', () => {
    const { getAllByRole } = renderCriar()

    const titleField = getAllByRole('textbox')[0]

    expect(titleField).toHaveAttribute('name', 'title')
  })

  it('should have a InputField with name "projectDate""', () => {
    const { getAllByRole } = renderCriar()

    const projectDateField = getAllByRole('textbox')[1]

    expect(projectDateField).toHaveAttribute('name', 'projectDate')
  })

  it('should have a InputField with name "technology""', () => {
    const { getAllByRole } = renderCriar()

    const technologyField = getAllByRole('textbox')[2]

    expect(technologyField).toHaveAttribute('name', 'technology')
  })

  it('should have a InputField with name "type""', () => {
    const { getAllByRole } = renderCriar()

    const typeField = getAllByRole('textbox')[3]

    expect(typeField).toHaveAttribute('name', 'type')
  })

  it('should have a InputField with name "image""', () => {
    const { getAllByRole } = renderCriar()

    const imageField = getAllByRole('textbox')[4]

    expect(imageField).toHaveAttribute('name', 'image')
  })

  it('should have a InputField with name "alt""', () => {
    const { getAllByRole } = renderCriar()

    const altField = getAllByRole('textbox')[5]

    expect(altField).toHaveAttribute('name', 'alt')
  })

  it('should have a InputField with name "githubLink""', () => {
    const { getAllByRole } = renderCriar()

    const githubLinkField = getAllByRole('textbox')[6]

    expect(githubLinkField).toHaveAttribute('name', 'githubLink')
  })

  it('should have a InputField with name "deployLink""', () => {
    const { getAllByRole } = renderCriar()

    const deployLinkField = getAllByRole('textbox')[7]

    expect(deployLinkField).toHaveAttribute('name', 'deployLink')
  })

  it('should have a TextAreaField with name "description""', () => {
    const { getAllByRole } = renderCriar()

    const descriptionField = getAllByRole('textbox')[8]

    expect(descriptionField).toHaveAttribute('name', 'description')
  })

  it('should have a button with text "Limpar"', () => {
    const { getAllByRole } = renderCriar()

    const clearButton = getAllByRole('button')[0]

    expect(clearButton).toHaveTextContent('Limpar')
  })

  it('should have a button with text "Criar projeto"', () => {
    const { getAllByRole } = renderCriar()

    const createButton = getAllByRole('button')[1]

    expect(createButton).toHaveTextContent('Criar projeto')
  })

  it('should write on InputFields', () => {
    const { getAllByRole } = renderCriar()

    const titleField = getAllByRole('textbox')[0]

    const projectDateField = getAllByRole('textbox')[1]

    const technologyField = getAllByRole('textbox')[2]

    const typeField = getAllByRole('textbox')[3]

    const imageField = getAllByRole('textbox')[4]

    const altField = getAllByRole('textbox')[5]

    const githubLinkField = getAllByRole('textbox')[6]

    const deployLinkField = getAllByRole('textbox')[7]

    const descriptionField = getAllByRole('textbox')[8]

    fireEvent.change(titleField, {
      target: {
        value: 'BarberShop',
      },
    })

    fireEvent.change(projectDateField, {
      target: {
        value: '10 de jul, 2023 - 11 de jul, 2023',
      },
    })

    fireEvent.change(technologyField, {
      target: {
        value: 'React, Typescript',
      },
    })

    fireEvent.change(typeField, {
      target: {
        value: 'Aplicação Web',
      },
    })

    fireEvent.change(imageField, {
      target: {
        value:
          'https://raw.githubusercontent.com/iarlen-reis/BrChallenges-PaquetaCalcados/master/public/Template.png',
      },
    })

    fireEvent.change(altField, {
      target: {
        value: 'Imagem do ecommerce paquetá Calçados',
      },
    })

    fireEvent.change(githubLinkField, {
      target: {
        value: 'https://github.com/Iarlen-reis',
      },
    })

    fireEvent.change(deployLinkField, {
      target: {
        value: 'https://www.paquetacalcados.com.br',
      },
    })

    fireEvent.change(descriptionField, {
      target: {
        value: 'Descrição do projeto BarberShop',
      },
    })

    expect(titleField).toHaveValue('BarberShop')
    expect(projectDateField).toHaveValue('10 de jul, 2023 - 11 de jul, 2023')
    expect(technologyField).toHaveValue('React, Typescript')
    expect(typeField).toHaveValue('Aplicação Web')
    expect(imageField).toHaveValue(
      'https://raw.githubusercontent.com/iarlen-reis/BrChallenges-PaquetaCalcados/master/public/Template.png',
    )
    expect(altField).toHaveValue('Imagem do ecommerce paquetá Calçados')
    expect(githubLinkField).toHaveValue('https://github.com/Iarlen-reis')
    expect(deployLinkField).toHaveValue('https://www.paquetacalcados.com.br')
    expect(descriptionField).toHaveValue('Descrição do projeto BarberShop')
  })

  it('should clear all InputFields', () => {
    const { getAllByRole } = renderCriar()

    const clearButton = getAllByRole('button')[0]

    const titleField = getAllByRole('textbox')[0]

    const projectDateField = getAllByRole('textbox')[1]

    const technologyField = getAllByRole('textbox')[2]

    const typeField = getAllByRole('textbox')[3]

    const imageField = getAllByRole('textbox')[4]

    const altField = getAllByRole('textbox')[5]

    const githubLinkField = getAllByRole('textbox')[6]

    const deployLinkField = getAllByRole('textbox')[7]

    const descriptionField = getAllByRole('textbox')[8]

    fireEvent.change(titleField, {
      target: {
        value: 'BarberShop',
      },
    })

    fireEvent.change(projectDateField, {
      target: {
        value: '10 de jul, 2023 - 11 de jul, 2023',
      },
    })

    fireEvent.change(technologyField, {
      target: {
        value: 'React, Typescript',
      },
    })

    fireEvent.change(typeField, {
      target: {
        value: 'Aplicação Web',
      },
    })

    fireEvent.change(imageField, {
      target: {
        value:
          'https://raw.githubusercontent.com/iarlen-reis/BrChallenges-PaquetaCalcados/master/public/Template.png',
      },
    })

    fireEvent.change(altField, {
      target: {
        value: 'Imagem do ecommerce paquetá Calçados',
      },
    })

    fireEvent.change(githubLinkField, {
      target: {
        value: 'https://github.com/Iarlen-reis',
      },
    })

    fireEvent.change(deployLinkField, {
      target: {
        value: 'https://www.paquetacalcados.com.br',
      },
    })

    fireEvent.change(descriptionField, {
      target: {
        value: 'Descrição do projeto BarberShop',
      },
    })

    expect(titleField).toHaveValue('BarberShop')
    expect(projectDateField).toHaveValue('10 de jul, 2023 - 11 de jul, 2023')
    expect(technologyField).toHaveValue('React, Typescript')
    expect(typeField).toHaveValue('Aplicação Web')
    expect(imageField).toHaveValue(
      'https://raw.githubusercontent.com/iarlen-reis/BrChallenges-PaquetaCalcados/master/public/Template.png',
    )
    expect(altField).toHaveValue('Imagem do ecommerce paquetá Calçados')
    expect(githubLinkField).toHaveValue('https://github.com/Iarlen-reis')
    expect(deployLinkField).toHaveValue('https://www.paquetacalcados.com.br')
    expect(descriptionField).toHaveValue('Descrição do projeto BarberShop')

    fireEvent.click(clearButton)

    expect(titleField).toHaveValue('')
    expect(projectDateField).toHaveValue('')
    expect(technologyField).toHaveValue('')
    expect(typeField).toHaveValue('')
    expect(imageField).toHaveValue('')
    expect(altField).toHaveValue('')
    expect(githubLinkField).toHaveValue('')
    expect(deployLinkField).toHaveValue('')
    expect(descriptionField).toHaveValue('')
  })
})
