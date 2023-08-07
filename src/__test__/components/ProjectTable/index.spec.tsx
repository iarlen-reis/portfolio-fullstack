import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectTable from '@/components/ProjectTable'

const renderProjectTable = () => {
  const projects = [
    {
      id: '1',
      title: 'Projeto 1',
      type: 'Aplicação Web',
    },
  ]
  return render(<ProjectTable projects={projects} />)
}

describe('ProjectTable component', () => {
  it('should render project table component', () => {
    renderProjectTable()
  })

  it('should display the th with values "Projeto", "Tipo do projeto" and "Ações"', () => {
    const { getByText } = renderProjectTable()

    const thProject = getByText('Projeto')
    const thcreated = getByText('Tipo do projeto')
    const thActions = getByText('Ações')

    expect(thProject).toBeInTheDocument()
    expect(thcreated).toBeInTheDocument()
    expect(thActions).toBeInTheDocument()
  })

  it('should display the tr with values "Projeto 1", "10 de jul, 2023" and "Editar"', () => {
    const { getByText } = renderProjectTable()

    const trProject = getByText('Projeto 1')
    const trcreated = getByText('Aplicação Web')
    const trActions = getByText('Editar')

    expect(trProject).toBeInTheDocument()
    expect(trcreated).toBeInTheDocument()
    expect(trActions).toBeInTheDocument()
  })

  it('should have a link to show the project with value /projetos/1', () => {
    const { getByRole } = renderProjectTable()

    const link = getByRole('link', { name: 'Projeto 1' })

    expect(link).toHaveAttribute('href', '/projetos/1')
  })

  it('should have a link to edit the project with value /projetos/editar/1', () => {
    const { getByRole } = renderProjectTable()

    const link = getByRole('link', { name: 'Editar' })

    expect(link).toHaveAttribute('href', '/projetos/editar/1')
  })
})
