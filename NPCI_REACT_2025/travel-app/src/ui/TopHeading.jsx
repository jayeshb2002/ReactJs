import React from 'react'

const TopHeading = ({title, user}) => {
    return (
        <>
            <h1>{title} </h1>
            <p>{user.username}</p>
        </>
  )
}

export default TopHeading