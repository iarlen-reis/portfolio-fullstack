export interface IProjectFormProps {
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

export interface IProjectDetailsProps {
  isCreating?: boolean
  isEditing?: boolean
  project?: IProjectFormProps
  handleFormSubmit: (data: IProjectFormProps) => void
}
