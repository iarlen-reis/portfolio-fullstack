import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectDetails from '@/components/ProjectDetails'

const renderProjectDetailsAsCreator = () => {
  return render(
    <ProjectDetails handleFormSubmit={() => ({})} isCreating={false} />,
  )
}

const renderProjectDetailsAsEditor = () => {
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
  return render(
    <ProjectDetails
      project={project}
      handleFormSubmit={() => ({})}
      isEditing={false}
    />,
  )
}

describe('ProjectDetails component as creator', () => {
  it('should render project details component', () => {
    renderProjectDetailsAsCreator()
  })

  it('should have a TextField with name "title"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const title = getAllByRole('textbox')[0]

    expect(title).toHaveAttribute('name', 'title')
  })

  it('should have a TextField with name "projectDate"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const projectDate = getAllByRole('textbox')[1]

    expect(projectDate).toHaveAttribute('name', 'projectDate')
  })

  it('should have a TextField with name "technology"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const technology = getAllByRole('textbox')[2]

    expect(technology).toHaveAttribute('name', 'technology')
  })

  it('should have a TextField with name "type"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const type = getAllByRole('textbox')[3]

    expect(type).toHaveAttribute('name', 'type')
  })

  it('should have a TextField with name "image"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const image = getAllByRole('textbox')[4]

    expect(image).toHaveAttribute('name', 'image')
  })

  it('should have a TextField with name "alt"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const alt = getAllByRole('textbox')[5]

    expect(alt).toHaveAttribute('name', 'alt')
  })

  it('should have a TextField with name "githubLink"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const githubLink = getAllByRole('textbox')[6]

    expect(githubLink).toHaveAttribute('name', 'githubLink')
  })

  it('should have a TextField with name "deployLink"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const deployLink = getAllByRole('textbox')[7]

    expect(deployLink).toHaveAttribute('name', 'deployLink')
  })

  it('should have a TextField with name "description"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const description = getAllByRole('textbox')[8]

    expect(description).toHaveAttribute('name', 'description')
  })

  it('should have a button with text "Limpar"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const button = getAllByRole('button')[0]

    expect(button).toHaveTextContent('Limpar')
  })

  it('should have a button with text "Criar projeto"', () => {
    const { getAllByRole } = renderProjectDetailsAsCreator()

    const button = getAllByRole('button')[1]

    expect(button).toHaveTextContent('Criar projeto')
  })
})

describe('ProjectDetails component as editor', () => {
  it('should render project details component', () => {
    renderProjectDetailsAsEditor()
  })

  it('should display a TextField with text "BarberShop"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const title = getAllByRole('textbox')[0]

    expect(title).toHaveAttribute('value', 'BarberShop')
  })

  it('should display a TextField with text "10 de jul, 2023 - 11 de jul, 2023"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const projectDate = getAllByRole('textbox')[1]

    expect(projectDate).toHaveAttribute(
      'value',
      '10 de jul, 2023 - 11 de jul, 2023',
    )
  })

  it('should display a TextField with text "React, Typescript"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const projectDate = getAllByRole('textbox')[2]

    expect(projectDate).toHaveAttribute('value', 'React, Typescript')
  })

  it('should display a TextField with text "Aplicação Web"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const type = getAllByRole('textbox')[3]

    expect(type).toHaveAttribute('value', 'Aplicação Web')
  })

  it('should display a TextField with text "https://raw.githubusercontent.com/iarlen-reis/BarberShop/master/public/Images/Template.png"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const image = getAllByRole('textbox')[4]

    expect(image).toHaveAttribute(
      'value',
      'https://raw.githubusercontent.com/iarlen-reis/BarberShop/master/public/Images/Template.png',
    )
  })

  it('should display a TextField with text "Imagem do ecommerce paquetá Calçados"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const alt = getAllByRole('textbox')[5]

    expect(alt).toHaveAttribute('value', 'Imagem do ecommerce paquetá Calçados')
  })

  it('should display a TextField with text "https://github.com/Iarlen-reis"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const githubLink = getAllByRole('textbox')[6]

    expect(githubLink).toHaveAttribute(
      'value',
      'https://github.com/Iarlen-reis',
    )
  })

  it('should display a TextField with text "https://www.paquetacalcados.com.br"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const deployLink = getAllByRole('textbox')[7]

    expect(deployLink).toHaveAttribute(
      'value',
      'https://www.paquetacalcados.com.br',
    )
  })

  it('should display a TextField with text "Descrição do projeto BarberShop"', () => {
    const { getByText } = renderProjectDetailsAsEditor()

    const description = getByText('Descrição do projeto BarberShop')

    expect(description).toBeInTheDocument()
  })

  it('should display a button with text "Limpar"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const button = getAllByRole('button')[0]

    expect(button).toHaveTextContent('Limpar')
  })

  it('should display a button with text "Editar projeto"', () => {
    const { getAllByRole } = renderProjectDetailsAsEditor()

    const button = getAllByRole('button')[1]

    expect(button).toHaveTextContent('Editar projeto')
  })
})
