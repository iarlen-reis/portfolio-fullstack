'use client'
import Image from 'next/image'
import { GithubIcon, RocketIcon } from 'lucide-react'
import { IProjectProps } from '@/@types/ProjectTypes'
import LinkExternalWithIcon from '../LinkExternalWithIcon'
import { Rotate, Zoom } from 'react-awesome-reveal'

interface IProjectContentProps {
  project: Pick<
    IProjectProps,
    'title' | 'image' | 'alt' | 'githubLink' | 'deployLink'
  >
}
const ProjectContent = ({ project }: IProjectContentProps) => {
  return (
    <>
      <Zoom delay={500} triggerOnce>
        <div className="max-w-[500px]">
          <Image
            src={project.image}
            alt={project.alt}
            width={600}
            height={600}
            className="rounded-md"
          />
        </div>
      </Zoom>
      <Rotate cascade triggerOnce>
        <ul className="flex items-center gap-3">
          <LinkExternalWithIcon
            icon={GithubIcon}
            to={project.githubLink}
            arialLabel={`Link para github do projeto ${project.title}`}
            className="flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-4 py-3 hover:bg-black"
          />
          <LinkExternalWithIcon
            icon={RocketIcon}
            to={project.deployLink}
            arialLabel={`Link para deploy do projeto ${project.title}`}
            className="flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-4 py-3 hover:bg-emerald-600"
          />
        </ul>
      </Rotate>
    </>
  )
}

export default ProjectContent
