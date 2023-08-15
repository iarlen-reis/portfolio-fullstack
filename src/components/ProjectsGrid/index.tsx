'use client'
import { IProjectProps } from '@/@types/ProjectTypes'
import React from 'react'
import ProjectCard from '../ProjectCard'
import { Zoom } from 'react-awesome-reveal'

interface IProjectsGridProps {
  projects: IProjectProps[]
}
const ProjectsGrid = ({ projects }: IProjectsGridProps) => {
  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:justify-between xl:grid-cols-3">
      <Zoom cascade direction="down" triggerOnce delay={500}>
        {projects.map((project) => (
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
