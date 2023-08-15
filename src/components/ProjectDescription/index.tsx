'use client'

import { IProjectProps } from '@/@types/ProjectTypes'
import React from 'react'
import { Reveal, Zoom } from 'react-awesome-reveal'

interface IProjectDescriptionProps {
  project: Pick<IProjectProps, 'description'>
}

const ProjectDescription = ({ project }: IProjectDescriptionProps) => {
  return (
    <div className="mt-2 flex max-w-[560px] flex-col gap-2">
      <Reveal triggerOnce>
        <h2 className="font-marker text-xl sm:text-2xl">Detalhes do projeto</h2>
      </Reveal>
      <Zoom triggerOnce>
        <div className="max-w-full">
          <p className="whitespace-pre-line font-roboto text-base antialiased sm:text-lg">
            {project.description}
          </p>
        </div>
      </Zoom>
    </div>
  )
}

export default ProjectDescription
