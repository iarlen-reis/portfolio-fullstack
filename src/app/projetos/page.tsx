import { IProjectProps } from '@/@types/ProjectTypes'
import ProjectsGrid from '@/components/ProjectsGrid'
import axios from 'axios'
import { Metadata } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Iarlen Reis - Portfólio | Projetos',
  description:
    'Explore uma coleção diversificada de projetos desenvolvidos e realizados por mim, Iarlen Reis.',
}

const Projetos = async () => {
  const response = await axios.get<IProjectProps[]>(
    'http://localhost:3000/api/projects',
    {
      headers: {
        Authorization: `Bearer ${headers().get('Authorization')}`,
      },
    },
  )

  const projects = response.data

  return (
    <div className="flex flex-col gap-2 pb-16">
      <div className="mt-5 flex flex-col gap-1">
        <h1 className="font-marker text-2xl lg:text-3xl">Projetos</h1>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  )
}

export default Projetos
