'use client'
import { Slide } from 'react-awesome-reveal'
const InitialPresentation = () => {
  return (
    <Slide direction="down" duration={2000}>
      <div className="flex flex-col gap-3" data-testid="initial-presentation">
        <div className="flex flex-col">
          <span className="font-roboto text-xl sm:text-4xl lg:text-3xl">
            Olá, eu sou
          </span>
          <h1 className="font-marker text-5xl sm:text-6xl lg:text-7xl">
            Iarlen Reis
          </h1>
        </div>
        <span className="font-roboto text-sm uppercase leading-relaxed tracking-widest lg:text-base">
          Desenvolvedor Front-end
        </span>
      </div>
    </Slide>
  )
}

export default InitialPresentation
