'use client'
import ProjectDetails from '@/components/ProjectDetails'
import { useProject } from '@/hooks/useProject'
import { useEffect } from 'react'

const ProjectEdit = ({ params }: { params: { id: string } }) => {
  const { getProject, editProject, project, isEdditing } = useProject()

  useEffect(() => {
    getProject(params.id)
  }, [params.id])

  if (!project) {
    return null
  }

  return (
    <div className="pb-16">
      <div className="m-auto mt-5 flex w-full max-w-[460px] flex-col gap-3 lg:max-w-[600px]">
        <h1 className="font-marker text-2xl">Editar projeto</h1>
        <ProjectDetails
          project={project}
          isEditing={isEdditing}
          handleFormSubmit={editProject}
        />
      </div>
    </div>
  )
}

export default ProjectEdit
