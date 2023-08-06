import Link from 'next/link'

interface IProjectTableProps {
  id: string
  title: string
  createdAt: string
}

const ProjectTable = ({ id, title, createdAt }: IProjectTableProps) => {
  return (
    <div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-1">Projeto</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="max-h-9 overflow-auto">
          <tr className="odd:bg-[#011E28]">
            <td className="mb-2 px-1">{title}</td>
            <td>{createdAt}</td>
            <td>
              <Link
                href={`/projetos/editar/${id}`}
                className="font-semibold transition-colors hover:text-zinc-500"
              >
                Editar
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable
