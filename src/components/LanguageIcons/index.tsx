'use client'

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCss3,
} from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { AiOutlineHtml5 } from 'react-icons/ai'
import LinkExternalWithIcon from '@/components/LinkExternalWithIcon'
import { Roll, Rotate } from 'react-awesome-reveal'

const LanguageIcons = () => {
  return (
    <div className="flex flex-col gap-3" data-testid="language-icons">
      <Rotate delay={1900}>
        <h2 className="font-marker text-2xl lg:text-3xl">Linguagens</h2>
      </Rotate>
      <div className="flex flex-col gap-3">
        <Roll cascade delay={2000}>
          <ul className="flex items-center gap-3">
            <LinkExternalWithIcon
              to="https://www.typescriptlang.org/"
              icon={TbBrandTypescript}
              arialLabel="Link para a página oficial do TypeScript"
              fontSize={45}
              colorIcon={'#265c7e'}
              className="hover:animate-pulse"
            />
            <LinkExternalWithIcon
              to="https://www.javascript.com/"
              icon={TbBrandJavascript}
              arialLabel="Link para a página oficial do JavaScript"
              fontSize={45}
              colorIcon={'#f7df1e'}
              className="hover:animate-pulse"
            />
            <LinkExternalWithIcon
              to="https://nodejs.org/en"
              icon={FaNodeJs}
              arialLabel="Link para a página oficial do Node.js"
              fontSize={45}
              colorIcon={'#27ba36'}
              className="hover:animate-pulse"
            />
            <LinkExternalWithIcon
              to="https://html.com/"
              icon={AiOutlineHtml5}
              arialLabel="Link para a página oficial do HTML"
              fontSize={45}
              colorIcon={'#e36b20'}
              className="hover:animate-pulse"
            />
            <LinkExternalWithIcon
              to="https://www.w3.org/Style/CSS/Overview.en.html"
              icon={TbBrandCss3}
              arialLabel="Link para a página oficial do CSS"
              fontSize={45}
              colorIcon={'#216ee3'}
              className="hover:animate-pulse"
            />
          </ul>
        </Roll>
      </div>
    </div>
  )
}

export default LanguageIcons
