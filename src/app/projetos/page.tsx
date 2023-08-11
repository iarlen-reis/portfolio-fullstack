import ProjectCard from '@/components/ProjectCard'
import axios from 'axios'

interface IProjectProps {
  id: string
  title: string
  description: string
  image: string
  alt: string
  type: string
  deployLink: string
  githubLink: string
  projectDate: string
}

const Projetos = async () => {
  const response = await axios.get<IProjectProps[]>(
    'http://localhost:3000/api/projects',
  )

  const projects = response.data

  return (
    <div className="flex flex-col gap-2 pb-16">
      <div className="mt-5 flex flex-col gap-1">
        <h1 className="font-marker text-2xl lg:text-3xl">Projetos</h1>
      </div>
      <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:justify-between xl:grid-cols-3">
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
      </div>
    </div>
  )
}

export default Projetos
