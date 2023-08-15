import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'intersection-observer'
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
      'Olá! Meu nome é Iarlen Reis, tenho 21 anos e sou residente da Cidade de Salvador, na Bahia. Inicie meus estudos na programação com a linguagem Python, a princípio para desenvolvimento de bots e automação de sites.',
    )

    expect(oneParagraph).toBeInTheDocument()
  })

  it('should render second paragraph".', () => {
    const { getByText } = renderAboutMeInformation()

    const secondParagraph = getByText(
      'Após alguns meses de estudos, decidir explorar a área de desenvolvimento web, começando com HTML e CSS. Foi nesse momento que me apaixonei pela área web. Logo em seguida, comecei meus na linguagem Javascript, onde reaproveitei boa parte da base do python e logo me consolidei aprendendo Typescript.',
    )

    expect(secondParagraph).toBeInTheDocument()
  })

  it('should render third paragraph".', () => {
    const { getByText } = renderAboutMeInformation()

    const thirdParagraph = getByText(
      'Atualmente, sou desenvolvedor front-end, com foco em ReactJs/NextJs, também já estudei alguns outras tecnologias como React native e nodeJs. Pretendo continuar evoluindo minha skills front-end, mas também me aprofundar um pouco mais back-end para me tornar um desenvolvedor mais completo.',
    )

    expect(thirdParagraph).toBeInTheDocument()
  })
})
