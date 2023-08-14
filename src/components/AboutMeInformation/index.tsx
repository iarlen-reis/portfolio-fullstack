'use client'
import { Fade, Slide } from 'react-awesome-reveal'
const AboutMeInformation = () => {
  return (
    <div className="flex flex-col gap-3" data-testid="about-me-information">
      <Slide direction="left">
        <h1 className="mt-5 font-marker text-2xl lg:text-3xl">Informações</h1>
      </Slide>
      <Fade
        cascade
        duration={1000}
        delay={500}
        className="flex flex-col gap-3 lg:gap-4"
      >
        <p className="font-roboto text-base leading-relaxed sm:text-lg lg:text-xl">
          Olá, meu nome é Iarlen Reis, tenho 21 anos e sou morador da cidade de
          Salvador, na Bahia.
        </p>
        <p className="font-roboto text-base leading-relaxed sm:text-lg lg:text-xl">
          Iniciei meus estudos de programação com a linguagem Python, a
          princípio para desenvolvimento de bots e automação de sites.
        </p>
        <p className="font-roboto text-base leading-relaxed sm:text-lg lg:text-xl">
          Após alguns meses resolvi estudar desenvolvimento web, começando com
          HTML / CSS e foi assim que descobrir minha paixão pela web.
        </p>
      </Fade>
    </div>
  )
}

export default AboutMeInformation
