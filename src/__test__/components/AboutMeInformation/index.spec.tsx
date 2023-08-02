import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutMeInformation from '@/components/AboutMeInformation'

const renderAboutMeInformation = () => {
  return render(<AboutMeInformation />)
}

describe('AboutMeInformation component', () => {
  it('should render AboutMeInformation component', () => {
    renderAboutMeInformation()
  })

  it('should render text "Informações".', () => {
    const { getByText } = renderAboutMeInformation()

    const text = getByText('Informações')

    expect(text).toBeInTheDocument()
  })

  it('should render first paragraph".', () => {
    const { getByText } = renderAboutMeInformation()

    const oneParagraph = getByText(
      'Olá, meu nome é Iarlen Reis, tenho 21 anos e sou morador da cidade de Salvador, na Bahia.',
    )

    expect(oneParagraph).toBeInTheDocument()
  })

  it('should render second paragraph".', () => {
    const { getByText } = renderAboutMeInformation()

    const secondParagraph = getByText(
      'Iniciei meus estudos de programação com a linguagem Python, a princípio para desenvolvimento de bots e automação de sites.',
    )

    expect(secondParagraph).toBeInTheDocument()
  })

  it('should render third paragraph".', () => {
    const { getByText } = renderAboutMeInformation()

    const thirdParagraph = getByText(
      'Após alguns meses resolvi estudar desenvolvimento web, começando com HTML / CSS e foi assim que descobrir minha paixão pela web.',
    )

    expect(thirdParagraph).toBeInTheDocument()
  })
})
