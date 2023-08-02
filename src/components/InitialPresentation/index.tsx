const InitialPresentation = () => {
  return (
    <div className="flex flex-col gap-2" data-testid="initial-presentation">
      <div className="flex flex-col">
        <span className="font-itim text-xl sm:text-2xl lg:text-3xl">
          Olá, eu sou
        </span>
        <h1 className="font-itim text-5xl sm:text-6xl lg:text-7xl">
          Iarlen Reis
        </h1>
      </div>
      <span className="font-poppins text-sm uppercase leading-relaxed tracking-widest lg:text-base">
        Desenvolvedor Front-end
      </span>
    </div>
  )
}

export default InitialPresentation
