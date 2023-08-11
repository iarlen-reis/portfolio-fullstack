import { Session, getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface IUserProps {
  session: Session | null
}

export const useCurrentUser = async (): Promise<IUserProps> => {
  const session = await getServerSession(authOptions)

  return {
    session,
  }
}
