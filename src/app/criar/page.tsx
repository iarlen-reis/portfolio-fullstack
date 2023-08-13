'use client'

import ProjectDetails from '@/components/ProjectDetails'
import { useProject } from '@/hooks/useProject'

const Criar = () => {
  const { createProject, isCreating } = useProject()

  return (
    <div className="pb-16">
      <div className="m-auto mt-5 flex w-full max-w-[460px] flex-col gap-3 lg:max-w-[600px]">
        <h1 className="font-marker text-2xl">Criar um projeto</h1>
        <ProjectDetails
          isCreating={isCreating}
          handleFormSubmit={createProject}
        />
      </div>
    </div>
  )
}

export default Criar
