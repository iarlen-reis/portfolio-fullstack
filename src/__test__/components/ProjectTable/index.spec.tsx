import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectTable from '@/components/ProjectTable'

const renderProjectTable = () => {
  return render(
    <ProjectTable id="1" title="Projeto 1" createdAt="10 de jul, 2023" />,
  )
}

describe('ProjectTable component', () => {
  it('should render project table component', () => {
    renderProjectTable()
  })

  it('should display the th with values "Projeto", "Criado em" and "Ações"', () => {
    const { getByText } = renderProjectTable()

    const thProject = getByText('Projeto')
    const thcreated = getByText('Criado em')
    const thActions = getByText('Ações')

    expect(thProject).toBeInTheDocument()
    expect(thcreated).toBeInTheDocument()
    expect(thActions).toBeInTheDocument()
  })

  it('should display the tr with values "Projeto 1", "10 de jul, 2023" and "Editar"', () => {
    const { getByText } = renderProjectTable()

    const trProject = getByText('Projeto 1')
    const trcreated = getByText('10 de jul, 2023')
    const trActions = getByText('Editar')

    expect(trProject).toBeInTheDocument()
    expect(trcreated).toBeInTheDocument()
    expect(trActions).toBeInTheDocument()
  })

  it('should have a link to edit the project with value /projetos/editar/1', () => {
    const { getByRole } = renderProjectTable()

    const link = getByRole('link', { name: 'Editar' })

    expect(link).toHaveAttribute('href', '/projetos/editar/1')
  })
})
