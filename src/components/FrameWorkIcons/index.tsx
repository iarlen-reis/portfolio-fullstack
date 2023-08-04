import { FaReact } from 'react-icons/fa'
import { SiFastify } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import LinkExternalWithIcon from '../LinkExternalWithIcon'

const FrameWorkIcons = () => {
  return (
    <div className="flex flex-col gap-3" data-testid="framework-icons">
      <ul className="flex items-center gap-3">
        <LinkExternalWithIcon
          to="https://react.dev/"
          icon={FaReact}
          arialLabel="Link para a página oficial do React"
          className="hover:animate-pulse"
          colorIcon="#61DBFB"
        />
        <LinkExternalWithIcon
          to="https://nextjs.org/"
          icon={TbBrandNextjs}
          arialLabel="Link para a página oficial do Next.js"
          className="hover:animate-pulse"
          colorIcon="#FFFFFF"
        />
        <LinkExternalWithIcon
          to="https://tailwindcss.com/"
          icon={TbBrandTailwind}
          arialLabel="Link para a página oficial do Tailwind CSS"
          className="hover:animate-pulse"
          colorIcon="#61DBFB"
        />
        <LinkExternalWithIcon
          to="https://fastify.dev/"
          icon={SiFastify}
          arialLabel="Link para a página oficial do Fastify"
          className="hover:animate-pulse"
          colorIcon="#FFFFFF"
        />
      </ul>
    </div>
  )
}

export default FrameWorkIcons
