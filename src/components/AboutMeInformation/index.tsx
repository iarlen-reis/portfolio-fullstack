const AboutMeInformation = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="mt-5 font-marker text-3xl lg:text-4xl">Informações</h1>
      <div className="flex flex-col gap-3 lg:gap-4">
        <p className="font-poppins text-base leading-relaxed sm:text-lg lg:text-xl xl:text-2xl">
          Olá, meu nome é Iarlen Reis, tenho 21 anos e sou morador da cidade de
          Salvador, na Bahia.
        </p>
        <p className="font-poppins text-base leading-relaxed sm:text-lg lg:text-xl xl:text-2xl">
          Iniciei meus estudos de programação com a linguagem Python, a
          princípio para desenvolvimento de bots e automação de sites.
        </p>
        <p className="font-poppins text-base leading-relaxed sm:text-lg lg:text-xl xl:text-2xl">
          Após alguns meses resolvi estudar desenvolvimento web, começando com
          HTML / CSS e foi assim que descobrir minha paixão pela web.
        </p>
      </div>
    </div>
  )
}

export default AboutMeInformation
