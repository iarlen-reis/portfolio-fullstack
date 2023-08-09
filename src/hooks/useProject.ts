import axios from 'axios'
import { useMutation } from 'react-query'

interface IProjectProps {
  title: string
  description: string
  image: string
  alt: string
  type: string
  deployLink: string
  githubLink: string
  projectDate: string
  technology: string
}

interface IUseProjectProps {
  createProject: (project: IProjectProps) => void
  isCreating: boolean
}

export const useProject = (): IUseProjectProps => {
  const { mutate: createProject, isLoading: isCreating } = useMutation(
    async (project: IProjectProps) => {
      await axios.post<IProjectProps>(
        'http://localhost:3000/api/projects',
        project,
      )
    },
  )
  return { createProject, isCreating }
}
