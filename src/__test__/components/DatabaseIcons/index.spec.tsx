import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DatabaseIcons from '@/components/DatabaseIcons'

const renderDatabaseIcons = () => {
  return render(<DatabaseIcons />)
}

describe('DatabaseIcons component', () => {
  it('should render DatabaseIcons component', () => {
    renderDatabaseIcons()
  })

  it('should display the "Mongodb" icon with href', () => {
    const { getAllByRole } = renderDatabaseIcons()

    const mongodbIcon = getAllByRole('link')[0]

    expect(mongodbIcon).toHaveAttribute(
      'href',
      'https://www.mongodb.com/pt-br/',
    )
  })

  it('should display the "Postgresql" icon with href', () => {
    const { getAllByRole } = renderDatabaseIcons()

    const postgresqlIcon = getAllByRole('link')[1]

    expect(postgresqlIcon).toHaveAttribute(
      'href',
      'https://www.postgresql.org/',
    )
  })

  it('should display the "Firebase" icon with href', () => {
    const { getAllByRole } = renderDatabaseIcons()

    const firebaseIcon = getAllByRole('link')[2]

    expect(firebaseIcon).toHaveAttribute(
      'href',
      'https://firebase.google.com/?hl=pt',
    )
  })

  it('should display the "Prisma" icon with href', () => {
    const { getAllByRole } = renderDatabaseIcons()

    const prismaIcon = getAllByRole('link')[3]

    expect(prismaIcon).toHaveAttribute('href', 'https://www.prisma.io/')
  })
})
