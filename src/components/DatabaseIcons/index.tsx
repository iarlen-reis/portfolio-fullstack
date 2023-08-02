import { SiMongodb, SiPostgresql, SiFirebase, SiPrisma } from 'react-icons/si'
const DatabaseIcons = () => {
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex items-center gap-3">
        <li>
          <a
            href="https://www.mongodb.com/pt-br/"
            rel="noreferrer"
            target="_blank"
          >
            <SiMongodb fontSize={45} color={'#01ed65'} />
          </a>
        </li>
        <li>
          <a
            href="https://www.postgresql.org/"
            rel="noreferrer"
            target="_blank"
          >
            <SiPostgresql fontSize={45} color={'#396c94'} />
          </a>
        </li>
        <li>
          <a
            href="https://firebase.google.com/?hl=pt"
            rel="noreferrer"
            target="_blank"
          >
            <SiFirebase fontSize={45} color={'#ffa714'} />
          </a>
        </li>
        <li>
          <a href="https://www.prisma.io/" rel="noreferrer" target="_blank">
            <SiPrisma fontSize={45} color={'#f7fbfd'} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default DatabaseIcons
