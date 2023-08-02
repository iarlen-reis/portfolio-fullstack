import Image from 'next/image'
import PerfilImage from 'public/perfil.png'

const ProfileImage = () => {
  return (
    <div
      data-testid="profile-image"
      className="profile m-auto mt-10 h-[170px] w-[170px] overflow-hidden rounded-full sm:h-[220px] sm:w-[220px] lg:h-[290px] lg:w-[290px]"
    >
      <Image
        src={PerfilImage}
        alt="logo"
        width={600}
        height={600}
        className="h-[170px] w-[170px] sm:h-[220px] sm:w-[220px] lg:h-[290px] lg:w-[290px]"
      />
    </div>
  )
}

export default ProfileImage
