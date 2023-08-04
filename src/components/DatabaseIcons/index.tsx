import { SiMongodb, SiPostgresql, SiFirebase, SiPrisma } from 'react-icons/si'
import LinkExternalWithIcon from '../LinkExternalWithIcon'
const DatabaseIcons = () => {
  return (
    <div className="flex flex-col gap-3" data-testid="database-icons">
      <ul className="flex items-center gap-3">
        <LinkExternalWithIcon
          to="https://www.mongodb.com/pt-br/"
          icon={SiMongodb}
          arialLabel="Link para a página oficial do MongoDB"
          className="hover:animate-pulse"
        />
        <LinkExternalWithIcon
          to="https://www.postgresql.org/"
          icon={SiPostgresql}
          arialLabel="Link para a página oficial do PostgreSQL"
          className="hover:animate-pulse"
        />
        <LinkExternalWithIcon
          to="https://firebase.google.com/?hl=pt"
          icon={SiFirebase}
          arialLabel="Link para a página oficial do Firebase"
          className="hover:animate-pulse"
        />
        <LinkExternalWithIcon
          to="https://www.prisma.io/"
          icon={SiPrisma}
          arialLabel="Link para a página oficial do Prisma"
          className="hover:animate-pulse"
        />
      </ul>
    </div>
  )
}

export default DatabaseIcons
