import { IProjectProps } from '@/@types/ProjectTypes'
import ProjectsGrid from '@/components/ProjectsGrid'
import axios from 'axios'

const Projetos = async () => {
  const response = await axios.get<IProjectProps[]>(
    'http://localhost:3000/api/projects',
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
