import { FaReact } from 'react-icons/fa'
import { SiFastify } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'

const FrameWorkIcons = () => {
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex items-center gap-3">
        <li>
          <a href="https://react.dev/" rel="noreferrer" target="_blank">
            <FaReact fontSize={45} color={'#61DBFB'} />
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
            <TbBrandNextjs fontSize={45} color={'#FFF'} />
          </a>
        </li>
        <li>
          <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
            <TbBrandTailwind fontSize={45} color={'#61DBFB'} />
          </a>
        </li>
        <li>
          <a href="https://fastify.dev/" rel="noreferrer" target="_blank">
            <SiFastify fontSize={45} color={'#FFF'} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FrameWorkIcons
