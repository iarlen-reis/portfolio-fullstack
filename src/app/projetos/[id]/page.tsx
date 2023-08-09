import axios from 'axios'
import Image from 'next/image'
import { GithubIcon, RocketIcon } from 'lucide-react'
import PageNavigation from '@/components/PageNavigation'
import LinkExternalWithIcon from '@/components/LinkExternalWithIcon'

interface IProjectProps {
  id: string
  title: string
  description: string
  image: string
  alt: string
  deployLink: string
  githubLink: string
  projectDate: string
  type: string
  technology: string
}
const Project = async ({ params }: { params: { id: string } }) => {
  const response = await axios.get<IProjectProps>(
    `http://localhost:3000/api/projects/${params.id}`,
  )

  const project = await response.data

  return (
    <div className="m-auto max-w-[600px] pb-16">
      <div className="mt-5 flex flex-col gap-4">
        <PageNavigation from={project.title} to="Projetos" link="/projetos" />
        <div className="flex flex-col gap-1">
          <h1 className="font-marker text-2xl sm:text-3xl">{project.title}</h1>
          <p className="font-roboto text-sm sm:text-base">
            {project.projectDate}
          </p>
        </div>
        <div className="max-w-[500px]">
          <Image
            src={project.image}
            alt={project.alt}
            width={600}
            height={600}
            className="rounded-md"
          />
        </div>
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
        <div className="flex flex-col gap-2">
          <h2 className="font-marker text-xl sm:text-2xl">Tecnologias</h2>
          <ul className="grid list-disc grid-cols-2 md:grid-cols-3">
            {project.technology.split(',').map((technology) => (
              <li key={technology} className="ml-4 font-roboto">
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 flex max-w-[560px] flex-col gap-2">
          <h2 className="font-marker text-xl sm:text-2xl">
            Detalhes do projeto
          </h2>
          <div className="max-w-full">
            <p className="whitespace-pre-line font-roboto text-base antialiased sm:text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
