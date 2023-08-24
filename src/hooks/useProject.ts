import axios from 'axios'
import { useMutation } from 'react-query'
import { useRouter } from 'next/navigation'

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
  technology: string
}

interface IUseProjectProps {
  getProject: (id: string) => void
  getProjects: () => void
  createProject: (project: IProjectProps) => void
  editProject: (project: IProjectProps) => void
  deleteProject: (id: string) => void
  project: IProjectProps | undefined
  projects: IProjectProps[] | undefined
  isEdditing: boolean
  isCreating: boolean
}

export const useProject = (): IUseProjectProps => {
  const router = useRouter()

  const { mutate: createProject, isLoading: isCreating } = useMutation(
    async (project: IProjectProps) => {
      await axios.post<IProjectProps>(
        'http://localhost:3000/api/projects',
        project,
      )
    },
    {
      onSuccess() {
        router.push('/dashboard')
      },
    },
  )

  const { data: projects, mutate: getProjects } = useMutation(async () => {
    const response = await axios.get<IProjectProps[]>(
      'http://localhost:3000/api/projects',
    )

    return response.data
  })

  const { data: project, mutate: getProject } = useMutation(
    async (id: string) => {
      const response = await axios.get<IProjectProps>(
        `http://localhost:3000/api/projects/${id}`,
      )

      return response.data
    },
  )

  const { mutate: editProject, isLoading: isEdditing } = useMutation(
    async (project: IProjectProps) => {
      await axios.put<IProjectProps>(
        `http://localhost:3000/api/projects/${project.id}`,
        project,
      )
    },
    {
      onSuccess() {
        router.push('/dashboard')
      },
    },
  )

  const { mutate: deleteProject } = useMutation(async (id: string) => {
    await axios.delete(`http://localhost:3000/api/projects/${id}`)
  })
  return {
    getProject,
    getProjects,
    createProject,
    editProject,
    deleteProject,
    project,
    projects,
    isCreating,
    isEdditing,
  }
}
