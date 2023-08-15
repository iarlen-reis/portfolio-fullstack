import { render } from '@testing-library/react'
import ProjectHeader from '@/components/ProjectHeader'
import '@testing-library/jest-dom'
import 'intersection-observer'

const renderProjectHeader = () => {
  return render(
    <ProjectHeader title="BarberShop" projectDate="10 de jul, 2023" />,
  )
}

describe('ProjectHeader component', () => {
  it('should render ProjectHeader component', () => {
    renderProjectHeader()
  })

  it('should have title "BarberShop"', () => {
    const { getByRole } = renderProjectHeader()

    const title = getByRole('heading', { name: 'BarberShop' })

    expect(title).toBeInTheDocument()
  })

  it('should have a paragraph with text "10 de jul, 2023"', () => {
    const { getByText } = renderProjectHeader()

    const date = getByText('10 de jul, 2023')

    expect(date).toBeInTheDocument()
  })
})
