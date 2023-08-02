import HomeIcons from '@/components/HomeIcons'
import ProfileImage from '@/components/ProfileImage'
import InitialPresentation from '@/components/InitialPresentation'

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-3 lg:mt-12 lg:flex-row lg:justify-between">
      <ProfileImage />
      <div className="m-auto flex flex-col gap-3">
        <InitialPresentation />
        <HomeIcons />
      </div>
    </div>
  )
}
