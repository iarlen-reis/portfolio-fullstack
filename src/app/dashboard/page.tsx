'use client'
import ProjectTable from '@/components/ProjectTable'
import Link from 'next/link'
import { useQuery } from 'react-query'
import axios from 'axios'
import { IProjectProps } from '@/@types/ProjectTypes'

const Dashboard = () => {
  const { data: projects } = useQuery(
    'projects',
    async () => {
      const response = await axios.get<IProjectProps[]>('/api/projects')

      return response.data
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
    },
  )

  return (
    <div className="m-auto w-full max-w-[630px]">
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="font-marker text-2xl sm:text-3xl">Dashboard</h1>
        <div className="flex h-14 items-center justify-end rounded-md bg-zinc-50/20 p-2">
          <Link
            href="/criar"
            className="rounded-md bg-[#111f24] p-2 text-sm hover:bg-[#192d35] sm:text-base"
          >
            Criar Projeto
          </Link>
        </div>
        <div className="m-auto mt-3 flex w-full max-w-[630px] flex-col gap-3 rounded-md bg-zinc-50/20 p-2 px-2">
          <div>
            <h2 className="mt-3 font-marker text-lg sm:text-2xl">
              Todos os projetos
            </h2>
            <p className="font-poppins text-sm sm:text-base">
              Total de projetos: {projects && projects.length}
            </p>
          </div>
          {projects && <ProjectTable projects={projects} />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
