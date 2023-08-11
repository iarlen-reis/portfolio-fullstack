import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      const url = new URL(`/`, request.url)
      return NextResponse.redirect(url)
    }
  }

  if (request.nextUrl.pathname.startsWith('/criar')) {
    if (!session) {
      const url = new URL(`/`, request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard', '/criar'],
}
