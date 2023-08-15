'use client'
import { Fade, Slide } from 'react-awesome-reveal'
const AboutMeInformation = () => {
  return (
    <div className="flex flex-col gap-3" data-testid="about-me-information">
      <Slide direction="left" triggerOnce>
        <h1 className="mt-5 font-marker text-2xl lg:text-3xl">Informações</h1>
      </Slide>
      <Fade
        cascade
        duration={1000}
        delay={500}
        triggerOnce
        className="flex flex-col gap-3 lg:gap-4"
      >
        <p className="font-roboto text-base leading-relaxed sm:text-lg lg:text-xl">
          Olá! Meu nome é Iarlen Reis, tenho 21 anos e sou residente da Cidade
          de Salvador, na Bahia. Inicie meus estudos na programação com a
          linguagem Python, a princípio para desenvolvimento de bots e automação
          de sites.
        </p>
        <p className="font-roboto text-base leading-relaxed sm:text-lg lg:text-xl">
          Após alguns meses de estudos, decidir explorar a área de
          desenvolvimento web, começando com HTML e CSS. Foi nesse momento que
          me apaixonei pela área web. Logo em seguida, comecei meus na linguagem
          Javascript, onde reaproveitei boa parte da base do python e logo me
          consolidei aprendendo Typescript.
        </p>
        <p className="font-roboto text-base leading-relaxed sm:text-lg lg:text-xl">
          Atualmente, sou desenvolvedor front-end, com foco em ReactJs/NextJs,
          também já estudei alguns outras tecnologias como React native e
          nodeJs. Pretendo continuar evoluindo minha skills front-end, mas
          também me aprofundar um pouco mais back-end para me tornar um
          desenvolvedor mais completo.
        </p>
      </Fade>
    </div>
  )
}

export default AboutMeInformation
