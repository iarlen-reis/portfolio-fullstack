'use client'

import TextField from '@/components/InputField'
import { TextAreaField } from '@/components/TextAreaField'
import { useProject } from '@/hooks/useProject'
import { FormProvider, useForm } from 'react-hook-form'

interface ICreateProjectFormProps {
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

const Criar = () => {
  const methods = useForm<ICreateProjectFormProps>()
  const { createProject, isCreating } = useProject()

  const handleClearFields = () => {
    methods.reset()
  }

  const handleCreateProject = async (data: ICreateProjectFormProps) => {
    createProject(data)

    handleClearFields()
  }

  return (
    <div className="pb-16">
      <div className="m-auto mt-5 flex w-full max-w-[460px] flex-col gap-3 lg:max-w-[600px]">
        <h1 className="font-marker text-2xl">Criar um projeto</h1>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleCreateProject)}
            className="flex w-full flex-col gap-2.5"
          >
            <TextField
              name="title"
              label="Título do projeto:"
              type="text"
              placeholder="BarberShop"
              disabled={isCreating}
              rules={{ required: 'Campo obrigatório' }}
            />
            <TextField
              name="projectDate"
              label="Inicio e fim do projeto:"
              type="text"
              placeholder="10 de jul, 2023 - 11 de out, 2023"
              disabled={isCreating}
              rules={{ required: 'Campo obrigatório' }}
            />
            <div className="flex w-full gap-3">
              <TextField
                name="technology"
                label="Tecnologias usadas:"
                type="text"
                placeholder="Next.js, React, TypeScript, TailwindCSS"
                disabled={isCreating}
                rules={{ required: 'Campo obrigatório' }}
              />
              <TextField
                name="type"
                label="Tipo do projeto:"
                type="text"
                placeholder="Web"
                disabled={isCreating}
                rules={{ required: 'Campo obrigatório' }}
              />
            </div>
            <div className="flex w-full gap-3">
              <TextField
                name="image"
                label="Url da imagem do projeto:"
                type="text"
                placeholder="https://github.com/..."
                disabled={isCreating}
                rules={{ required: 'Campo obrigatório' }}
              />
              <TextField
                name="alt"
                label="texto alternativo da imagem:"
                type="text"
                placeholder="Imagem do paquetá Calçados"
                disabled={isCreating}
                rules={{ required: 'Campo obrigatório' }}
              />
            </div>
            <div className="flex w-full gap-3">
              <TextField
                name="githubLink"
                label="Link do github:"
                type="text"
                placeholder="https://github.com/..."
                disabled={isCreating}
                rules={{ required: 'Campo obrigatório' }}
              />
              <TextField
                name="deployLink"
                label="Link do deploy:"
                type="text"
                placeholder="https://www.site.com.br"
                disabled={isCreating}
                rules={{ required: 'Campo obrigatório' }}
              />
            </div>
            <TextAreaField
              name="description"
              label="Descrição do projeto:"
              disabled={isCreating}
              rules={{ required: 'Campo obrigatório' }}
            />
            <div className="flex items-center gap-3">
              <button
                disabled={isCreating}
                type="reset"
                onClick={handleClearFields}
                className="w-full rounded bg-red-700 py-2 font-poppins text-white hover:bg-red-500 disabled:bg-zinc-400 disabled:text-zinc-600"
              >
                Limpar
              </button>
              <button
                disabled={isCreating}
                type="submit"
                className="w-full rounded bg-green-700 py-2 font-poppins text-white hover:bg-green-500 disabled:bg-zinc-400 disabled:text-zinc-600"
              >
                {isCreating ? 'criando projeto...' : 'Criar projeto'}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default Criar
