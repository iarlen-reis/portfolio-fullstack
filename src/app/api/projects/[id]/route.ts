import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import z from 'zod'

interface IParamsProps {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: IParamsProps) {
  const paramsShema = z.object({
    id: z.string(),
  })

  const { id } = paramsShema.parse(params)

  const findProject = await prisma.project.findUnique({
    where: {
      id,
    },
  })

  if (!findProject) {
    return NextResponse.json(
      { message: 'Projeto não encontrado!' },
      { status: 404 },
    )
  }

  return NextResponse.json(findProject, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: IParamsProps) {
  const paramsShema = z.object({
    id: z.string(),
  })

  const { id } = paramsShema.parse(params)

  const deleteProject = await prisma.project.delete({
    where: {
      id,
    },
  })

  return NextResponse.json(deleteProject, { status: 200 })
}

export async function PUT(request: NextRequest, { params }: IParamsProps) {
  const paramsShema = z.object({
    id: z.string(),
  })

  const bodySchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string(),
    deployLink: z.string(),
    githubLink: z.string(),
    projectDate: z.string(),
  })

  const { id } = paramsShema.parse(params)
  const {
    title,
    description,
    image,
    alt,
    deployLink,
    githubLink,
    projectDate,
  } = bodySchema.parse(await request.json())

  const updateProject = await prisma.project.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      image,
      alt,
      deployLink,
      githubLink,
      projectDate,
    },
  })

  return NextResponse.json(updateProject, { status: 201 })
}
