import React from 'react'

const Image = ({imageRef, altRef}) => {
  return (
    <img src={imageRef} alt={altRef} />
  )
}

export default Image