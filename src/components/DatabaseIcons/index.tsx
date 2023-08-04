import { SiMongodb, SiPostgresql, SiFirebase, SiPrisma } from 'react-icons/si'
import LinkExternalWithIcon from '@/components/LinkExternalWithIcon'

const DatabaseIcons = () => {
  return (
    <div className="flex flex-col gap-3" data-testid="database-icons">
      <ul className="flex items-center gap-3">
        <LinkExternalWithIcon
          to="https://www.mongodb.com/pt-br/"
          icon={SiMongodb}
          arialLabel="Link para a página oficial do MongoDB"
          fontSize={45}
          colorIcon="#01ed65"
          className="hover:animate-pulse"
        />
        <LinkExternalWithIcon
          to="https://www.postgresql.org/"
          icon={SiPostgresql}
          arialLabel="Link para a página oficial do PostgreSQL"
          className="hover:animate-pulse"
          fontSize={45}
          colorIcon="#396c94"
        />
        <LinkExternalWithIcon
          to="https://firebase.google.com/?hl=pt"
          icon={SiFirebase}
          arialLabel="Link para a página oficial do Firebase"
          className="hover:animate-pulse"
          colorIcon="#ffa714"
        />
        <LinkExternalWithIcon
          to="https://www.prisma.io/"
          icon={SiPrisma}
          arialLabel="Link para a página oficial do Prisma"
          className="hover:animate-pulse"
          colorIcon="#f7fbfd"
        />
      </ul>
    </div>
  )
}

export default DatabaseIcons
