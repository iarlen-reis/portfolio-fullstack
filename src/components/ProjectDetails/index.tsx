'use client'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import TextField from '../InputField'
import { TextAreaField } from '../TextAreaField'
import {
  IProjectDetailsProps,
  IProjectFormProps,
} from '@/@types/ProjectDetailsTypes'

const ProjectDetails = ({
  isCreating,
  isEditing,
  handleFormSubmit,
  project,
}: IProjectDetailsProps) => {
  const methods = useForm<IProjectFormProps>()

  const handleClearFields = () => {
    methods.reset()
  }

  const handleCreateOrEditProject = async (data: IProjectFormProps) => {
    if (project) {
      handleFormSubmit({ ...data, id: project.id })
      return
    }
    handleFormSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleCreateOrEditProject)}
        className="flex w-full flex-col gap-2.5"
      >
        <TextField
          name="title"
          label="Título do projeto:"
          type="text"
          placeholder="BarberShop"
          disabled={isCreating || isEditing}
          defaultValue={project?.title}
          rules={{ required: 'Campo obrigatório' }}
        />
        <TextField
          name="projectDate"
          label="Inicio e fim do projeto:"
          type="text"
          placeholder="10 de jul, 2023 - 11 de out, 2023"
          disabled={isCreating || isEditing}
          defaultValue={project?.projectDate}
          rules={{ required: 'Campo obrigatório' }}
        />
        <div className="flex w-full gap-3">
          <TextField
            name="technology"
            label="Tecnologias usadas:"
            type="text"
            placeholder="Next.js, React, TypeScript, TailwindCSS"
            disabled={isCreating || isEditing}
            defaultValue={project?.technology}
            rules={{ required: 'Campo obrigatório' }}
          />
          <TextField
            name="type"
            label="Tipo do projeto:"
            type="text"
            placeholder="Web"
            disabled={isCreating || isEditing}
            defaultValue={project?.type}
            rules={{ required: 'Campo obrigatório' }}
          />
        </div>
        <div className="flex w-full gap-3">
          <TextField
            name="image"
            label="Url da imagem do projeto:"
            type="text"
            placeholder="https://github.com/..."
            disabled={isCreating || isEditing}
            defaultValue={project?.image}
            rules={{ required: 'Campo obrigatório' }}
          />
          <TextField
            name="alt"
            label="texto alternativo da imagem:"
            type="text"
            placeholder="Imagem do paquetá Calçados"
            disabled={isCreating || isEditing}
            defaultValue={project?.alt}
            rules={{ required: 'Campo obrigatório' }}
          />
        </div>
        <div className="flex w-full gap-3">
          <TextField
            name="githubLink"
            label="Link do github:"
            type="text"
            placeholder="https://github.com/..."
            disabled={isCreating || isEditing}
            defaultValue={project?.githubLink}
            rules={{ required: 'Campo obrigatório' }}
          />
          <TextField
            name="deployLink"
            label="Link do deploy:"
            type="text"
            placeholder="https://www.site.com.br"
            disabled={isCreating || isEditing}
            defaultValue={project?.deployLink}
            rules={{ required: 'Campo obrigatório' }}
          />
        </div>
        <TextAreaField
          name="description"
          label="Descrição do projeto:"
          disabled={isCreating || isEditing}
          defaultValue={project?.description}
          rules={{ required: 'Campo obrigatório' }}
        />
        <div className="flex items-center gap-3">
          <button
            disabled={isCreating || isEditing}
            type="reset"
            onClick={handleClearFields}
            className="w-full rounded bg-red-700 py-2 font-poppins text-white hover:bg-red-500 disabled:bg-zinc-400 disabled:text-zinc-600"
          >
            Limpar
          </button>
          {isCreating !== undefined && (
            <button
              disabled={isCreating}
              type="submit"
              className="w-full rounded bg-green-700 py-2 font-poppins text-white hover:bg-green-500 disabled:bg-zinc-400 disabled:text-zinc-600"
            >
              {isCreating && isCreating
                ? 'Criando projeto...'
                : 'Criar projeto'}
            </button>
          )}
          {isEditing !== undefined && (
            <button
              disabled={isEditing}
              type="submit"
              className="w-full rounded bg-green-700 py-2 font-poppins text-white hover:bg-green-500 disabled:bg-zinc-400 disabled:text-zinc-600"
            >
              {isEditing ? 'Editando projeto...' : 'Editar projeto'}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  )
}

export default ProjectDetails
