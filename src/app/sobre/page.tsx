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
          <LanguageIcons />
          <FrameWorkIcons />
          <DatabaseIcons />
        </div>
      </div>
    </div>
  )
}

export default Sobre
