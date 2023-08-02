import FrameWorkIcons from '@/components/FrameWorkIcons'
import LanguageIcons from '@/components/LanguageIcons'
import DatabaseIcons from '@/components/DatabaseIcons'
import AboutMeInformation from '@/components/AboutMeInformation'

const Sobre = () => {
  return (
    <div className="pb-16">
      <div className="flex max-w-[900px] flex-col gap-8 xl:max-w-[1050px]">
        <AboutMeInformation />
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-marker text-2xl lg:text-3xl">Linguagens</h2>
            <LanguageIcons />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-marker text-2xl lg:text-3xl">Frameworks</h2>
            <FrameWorkIcons />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-marker text-2xl lg:text-3xl">Databases</h2>
            <DatabaseIcons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre
