'use client'
import { Reveal } from 'react-awesome-reveal'

interface IProjectHeaderProps {
  title: string
  projectDate: string
}
const ProjectHeader = ({ title, projectDate }: IProjectHeaderProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Reveal delay={300} triggerOnce>
        <h1 className="font-marker text-2xl sm:text-3xl">{title}</h1>
      </Reveal>
      <Reveal delay={500} triggerOnce>
        <p className="font-roboto text-sm sm:text-base">{projectDate}</p>
      </Reveal>
    </div>
  )
}

export default ProjectHeader
