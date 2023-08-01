/* eslint-disable import/no-absolute-path */
import Image from 'next/image'
import PerfilImage from '/public/perfil.png'
import HomeIcons from '@/components/HomeIcons'

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-3 lg:mt-12 lg:flex-row lg:justify-between">
      <div className="profile m-auto mt-10 h-[170px] w-[170px] overflow-hidden rounded-full sm:h-[220px] sm:w-[220px] lg:h-[290px] lg:w-[290px]">
        <Image
          src={PerfilImage}
          alt="logo"
          width={600}
          height={600}
          className="h-[170px] w-[170px] sm:h-[220px] sm:w-[220px] lg:h-[290px] lg:w-[290px]"
        />
      </div>
      <div className="m-auto flex flex-col gap-3">
        <div className="flex flex-col gap-2">
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
        <HomeIcons />
      </div>
    </div>
  )
}
