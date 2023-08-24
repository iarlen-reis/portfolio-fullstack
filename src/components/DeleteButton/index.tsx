'use client'

import { useProject } from '@/hooks/useProject'
import { useRouter } from 'next/navigation'

interface IDeleteButtonProps {
  projectId: string
}
const DeleteButton = ({ projectId }: IDeleteButtonProps) => {
  const { deleteProject } = useProject()
  const router = useRouter()

  const handleDelete = () => {
    confirm('Você tem certeza que deseja deletar este projeto?')

    deleteProject(projectId)

    router.refresh()
  }
  return (
    <td>
      <button
        onClick={handleDelete}
        className="font-semibold transition-colors hover:text-red-600"
      >
        Deletar
      </button>
    </td>
  )
}

export default DeleteButton
