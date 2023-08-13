import Image from 'next/image'
import {
  CalendarDaysIcon,
  RocketIcon,
  BadgeInfoIcon,
  MonitorCheckIcon,
  SmartphoneIcon,
} from 'lucide-react'

import Link from 'next/link'
import { IProjectCardImageProps } from '@/@types/ProjectCardTypes'

const ProjectCard = ({
  image,
  alt,
  title,
  projectDate,
  deployLink,
  detailsLink,
  type,
}: IProjectCardImageProps) => {
  return (
    <div className="m-auto flex max-w-[440px] flex-col gap-3 overflow-hidden rounded-md border border-white/60 pb-4 sm:max-w-full">
      <div className="w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={500}
          height={500}
          className="h-[196px] transition-all lg:hover:scale-[1.1]"
        />
      </div>
      <div className="flex flex-col gap-1.5 px-3">
        <span className="font-marker text-xl sm:text-2xl">{title}</span>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-4 w-4" />
            <span className="font-roboto text-xs sm:text-sm">
              {projectDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {type.toLocaleLowerCase().includes('web') ? (
              <MonitorCheckIcon className="h-4 w-4" />
            ) : (
              <SmartphoneIcon className="h-4 w-4" />
            )}
            <span className="font-roboto text-xs sm:text-sm">{type}</span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center  justify-center gap-4 px-2">
        <Link
          href={detailsLink}
          className="flex items-center justify-center gap-1 rounded bg-blue-600 p-2 px-5 hover:bg-blue-700 sm:w-36"
        >
          <BadgeInfoIcon className="h-4 w-4" />
          <span className="font-roboto text-sm sm:text-base">Detalhes</span>
        </Link>
        <Link
          target="_blank"
          href={deployLink}
          className="flex items-center justify-center gap-2 rounded border border-white/40 bg-transparent p-2 px-5 hover:border-transparent hover:bg-blue-600 sm:w-36"
        >
          <RocketIcon className="h-4 w-4" />
          <span className="font-roboto text-sm sm:text-base">Deploy</span>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
