import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import { useCurrentUser } from '@/hooks/useCurrentUser'

import z from 'zod'

export async function GET() {
  const projects = await prisma.project.findMany()

  return NextResponse.json(projects)
}

export async function POST(request: NextRequest) {
  const currentUser = await useCurrentUser()

  if (!currentUser.session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const bodySchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string(),
    deployLink: z.string(),
    githubLink: z.string(),
    projectDate: z.string(),
    technology: z.string(),
    type: z.string(),
  })

  const {
    title,
    description,
    image,
    alt,
    deployLink,
    githubLink,
    projectDate,
    technology,
    type,
  } = bodySchema.parse(await request.json())

  const project = await prisma.project.create({
    data: {
      title,
      description,
      image,
      alt,
      deployLink,
      githubLink,
      projectDate,
      technology,
      type,
    },
  })

  return NextResponse.json(project, { status: 200 })
}
