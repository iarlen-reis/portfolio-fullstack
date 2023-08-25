'use client'
import Image from 'next/image'
import PerfilImage from 'public/perfil.png'
import { Slide } from 'react-awesome-reveal'

const ProfileImage = () => {
  return (
    <Slide
      direction="left"
      duration={2000}
      triggerOnce
      data-testid="profile-image"
      className="m-auto mt-10 h-[190px] w-[190px] overflow-hidden rounded-full sm:h-[240px] sm:w-[240px] lg:h-[310px] lg:w-[310px]"
    >
      <Image
        src={PerfilImage}
        alt="imagem do desenvolvedor Iarlen Reis"
        width={310}
        height={310}
        className="h-[190px] w-[190px] sm:h-[240px] sm:w-[240px] lg:h-[310px] lg:w-[310px]"
      />
    </Slide>
  )
}

export default ProfileImage
