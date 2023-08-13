export interface IProjectProps {
  id: string
  title: string
  type: string
}

export interface IProjectTableProps {
  projects: IProjectProps[]
}
