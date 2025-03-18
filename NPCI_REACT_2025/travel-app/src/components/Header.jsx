import React from 'react'
import TopHeading from '../ui/TopHeading'
import Image from '../ui/image'
import travel from '../assets/images/travel.jpg'
import boy from '../assets/images/boy.jpg'

const Header = ({user}) => {
    return (
      <>
            <Image imageRef={travel} altRef="Logo"></Image>
            <Image imageRef={boy} altRef="Logo"></Image>
            <TopHeading title="Welcome" user={user} />
      </>
  )
}

export default Header