'use client'
import React from 'react'
import { useQuery } from 'react-query'
import ProjectCard from '@/components/ProjectCard'
import { IProjectProps } from '@/@types/ProjectTypes'
import { Zoom } from 'react-awesome-reveal'
import axios from 'axios'

const ProjectsGrid = () => {
  const { data: projects } = useQuery(
    'projects',
    async () => {
      const response = await axios.get<IProjectProps[]>('/api/projects')

      return response.data
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
    },
  )

  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:justify-between xl:grid-cols-3">
      <Zoom cascade direction="down" triggerOnce delay={500}>
        {projects &&
          projects.map((project) => (
            <ProjectCard
              title={project.title}
              image={project.image}
              alt={project.alt}
              projectDate={project.projectDate}
              type={project.type}
              deployLink={project.deployLink}
              detailsLink={`/projetos/${project.id}`}
              key={project.id}
            />
          ))}
      </Zoom>
    </div>
  )
}

export default ProjectsGrid
