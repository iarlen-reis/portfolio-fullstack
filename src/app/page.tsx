import HomeIcons from '@/components/HomeIcons'
import ProfileImage from '@/components/ProfileImage'
import InitialPresentation from '@/components/InitialPresentation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iarlen Reis - Portfólio | Desenvolvedor Front-End',
  description:
    'Bem-vindo ao meu portfólio! Eu sou Iarlen Reis, um apaixonado desenvolvedor front-end. Explore meu trabalho e projetos.',
}

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-3 lg:mt-12 lg:flex-row lg:justify-between">
      <ProfileImage />
      <div className="m-auto flex flex-col gap-3">
        <InitialPresentation />
        <HomeIcons />
      </div>
    </div>
  )
}
