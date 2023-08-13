import { IProjectTableProps } from '@/@types/ProjectTableTypes'
import Link from 'next/link'

const ProjectTable = ({ projects }: IProjectTableProps) => {
  return (
    <div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-1">Projeto</th>
            <th>Tipo do projeto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="max-h-9 overflow-auto">
          {projects.map((project) => (
            <tr className="odd:bg-[#011E28]" key={project.id}>
              <td className="mb-2 px-1">
                <Link
                  href={`/projetos/${project.id}`}
                  className="font-semibold transition-colors hover:text-zinc-500"
                >
                  {project.title}
                </Link>
              </td>
              <td>{project.type}</td>
              <td>
                <Link
                  href={`/projetos/editar/${project.id}`}
                  className="font-semibold transition-colors hover:text-zinc-500"
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable
