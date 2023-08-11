import z from 'zod'

const envSchema = z.object({
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  GITHUB_EMAIL_AUTHORIZED: z.string(),
})

export const env = envSchema.parse({
  GITHUB_ID: process.env.GITHUB_ID,
  GITHUB_SECRET: process.env.GITHUB_SECRET,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  GITHUB_EMAIL_AUTHORIZED: process.env.GITHUB_EMAIL_AUTHORIZED,
})
