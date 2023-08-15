'use client'
import { IProjectProps } from '@/@types/ProjectTypes'
import React from 'react'
import { Fade, Reveal } from 'react-awesome-reveal'

interface IProjectTechnologysProps {
  project: Pick<IProjectProps, 'technology'>
}
const ProjectTechnologys = ({ project }: IProjectTechnologysProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Reveal triggerOnce>
        <h2 className="font-marker text-xl sm:text-2xl">Tecnologias</h2>
      </Reveal>
      <Fade direction="up" cascade triggerOnce>
        <ul className="grid list-disc grid-cols-2 md:grid-cols-3">
          {project.technology.split(',').map((technology) => (
            <li key={technology} className="ml-4 font-roboto">
              {technology}
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  )
}

export default ProjectTechnologys
