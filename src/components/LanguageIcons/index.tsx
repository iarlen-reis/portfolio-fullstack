import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCss3,
} from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'

const LanguageIcons = () => {
  return (
    <div className="flex flex-col gap-3" data-testid="language-icons">
      <div className="flex flex-col gap-3">
        <ul className="flex items-center gap-3">
          <li>
            <a
              href="https://www.typescriptlang.org/"
              rel="noreferrer"
              target="_blank"
            >
              <TbBrandTypescript fontSize={45} color={'#265c7e'} />
            </a>
          </li>
          <li>
            <a
              href="https://www.javascript.com/"
              rel="noreferrer"
              target="_blank"
            >
              <TbBrandJavascript fontSize={45} color={'#f7df1e'} />
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/en" rel="noreferrer" target="_blank">
              <FaNodeJs fontSize={45} color={'#27ba36'} />
            </a>
          </li>
          <li>
            <a href="https://html.com/" rel="noreferrer" target="_blank">
              <AiOutlineHtml5 fontSize={45} color={'#e36b20'} />
            </a>
          </li>
          <li>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              rel="noreferrer"
              target="_blank"
            >
              <TbBrandCss3 fontSize={45} color={'#216ee3'} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LanguageIcons
