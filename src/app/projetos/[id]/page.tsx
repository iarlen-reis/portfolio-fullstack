'use client'
import PageNavigation from '@/components/PageNavigation'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectContent from '@/components/ProjectContent'
import ProjectTechnologys from '@/components/ProjectTechnologys'
import ProjectDescription from '@/components/ProjectDescription'
import { useQuery } from 'react-query'
import axios from 'axios'

const Project = ({ params }: { params: { id: string } }) => {
  const { data: project } = useQuery(
    ['project', params.id],
    async () => {
      const response = await axios.get(`/api/projects/${params.id}`)

      return response.data
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
    },
  )

  if (!project) {
    return null
  }

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
