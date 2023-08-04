import Image from 'next/image'
import { CalendarDaysIcon, RocketIcon, BadgeInfoIcon } from 'lucide-react'
import Link from 'next/link'

interface IProjectCardImageProps {
  image: string
  alt: string
  title: string
  projectDate: string
  deployLink: string
  detailsLink: string
}
const ProjectCard = ({
  image,
  alt,
  title,
  projectDate,
  deployLink,
  detailsLink,
}: IProjectCardImageProps) => {
  return (
    <div className="m-auto flex max-w-fit flex-col gap-3 overflow-hidden rounded-md border border-white/60 pb-3">
      <div className="w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={500}
          height={500}
          className="h-[196px] max-w-full transition-all lg:hover:scale-[1.1]"
        />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <span className="font-marker text-xl sm:text-2xl">{title}</span>
        <div className="flex items-center gap-2">
          <CalendarDaysIcon className="h-4 w-4" />
          <span className="font-poppins text-sm sm:text-base">
            {projectDate}
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center  justify-start gap-4 px-2">
        <Link
          target="_blank"
          href={deployLink}
          className="flex items-center justify-center gap-2 rounded bg-teal-600 p-2 px-5 hover:bg-teal-700 sm:w-36"
        >
          <RocketIcon className="h-4 w-4" />
          <span className="font-poppins text-sm sm:text-base">Deploy</span>
        </Link>
        <Link
          href={detailsLink}
          className="flex items-center justify-center gap-1 rounded bg-teal-600 p-2 px-5 hover:bg-teal-700 sm:w-36"
        >
          <BadgeInfoIcon className="h-4 w-4" />
          <span className="font-poppins text-sm sm:text-base">Detalhes</span>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
