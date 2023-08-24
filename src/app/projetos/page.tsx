import ProjectsGrid from '@/components/ProjectsGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iarlen Reis - Portfólio | Projetos',
  description:
    'Explore uma coleção diversificada de projetos desenvolvidos e realizados por mim, Iarlen Reis.',
}

const Projetos = () => {
  return (
    <div className="flex flex-col gap-2 pb-16">
      <div className="mt-5 flex flex-col gap-1">
        <h1 className="font-marker text-2xl lg:text-3xl">Projetos</h1>
      </div>
      <ProjectsGrid />
    </div>
  )
}

export default Projetos
