import axios from 'axios'
import PageNavigation from '@/components/PageNavigation'
import { IProjectProps } from '@/@types/ProjectTypes'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectContent from '@/components/ProjectContent'
import ProjectTechnologys from '@/components/ProjectTechnologys'
import ProjectDescription from '@/components/ProjectDescription'

const Project = async ({ params }: { params: { id: string } }) => {
  const response = await axios.get<IProjectProps>(
    `http://localhost:3000/api/projects/${params.id}`,
  )

  const project = await response.data

  return (
    <div className="m-auto max-w-[600px] pb-16">
      <div className="mt-5 flex flex-col gap-4">
        <PageNavigation from={project.title} to="Projetos" link="/projetos" />
        <ProjectHeader
          title={project.title}
          projectDate={project.projectDate}
        />
        <ProjectContent project={project} />
        <ProjectTechnologys project={project} />
        <ProjectDescription project={project} />
      </div>
    </div>
  )
}

export default Project
