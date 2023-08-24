import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectTable from '@/components/ProjectTable'
import { QueryClient, QueryClientProvider } from 'react-query'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}))

const renderProjectTable = () => {
  const client = new QueryClient()
  const projects = [
    {
      id: '1',
      title: 'Projeto 1',
      type: 'Aplicação Web',
    },
  ]

  return render(
    <QueryClientProvider client={client}>
      <ProjectTable projects={projects} />
    </QueryClientProvider>,
  )
}

describe('ProjectTable component', () => {
  it('should render project table component', () => {
    renderProjectTable()
  })

  it('should display the th with values "Projeto", "Tipo do projeto", "Editar" and "Remover"', () => {
    const { getByText, getAllByText } = renderProjectTable()

    const thProject = getByText('Projeto')
    const thcreated = getByText('Tipo do projeto')
    const thEdit = getAllByText('Editar')[0]
    const thRemove = getByText('Remover')

    expect(thProject).toBeInTheDocument()
    expect(thcreated).toBeInTheDocument()
    expect(thEdit).toBeInTheDocument()
    expect(thRemove).toBeInTheDocument()
  })

  it('should display the tr with values "Projeto 1", "10 de jul, 2023", "Editar" and "Deletar"', () => {
    const { getByText, getAllByRole } = renderProjectTable()

    const trProject = getByText('Projeto 1')
    const trcreated = getByText('Aplicação Web')
    const trEdit = getAllByRole('link', { name: 'Editar' })[0]
    const trDelete = getByText('Deletar')

    expect(trProject).toBeInTheDocument()
    expect(trcreated).toBeInTheDocument()
    expect(trEdit).toBeInTheDocument()
    expect(trDelete).toBeInTheDocument()
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

  it('should have a button to delete the project', () => {
    const { getByRole } = renderProjectTable()

    const buttonDelete = getByRole('button', { name: 'Deletar' })

    expect(buttonDelete).toBeInTheDocument()
  })
})
