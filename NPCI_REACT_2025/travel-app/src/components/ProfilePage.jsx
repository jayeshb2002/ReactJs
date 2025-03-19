import React from 'react'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
import { useData } from '../customHooks/useData'

const ProfilePage = () => {
    const [profileData ] = useData('http://localhost:3000/profiles')
    
  return (
      <>
          <TableHead columns={["id", "Name", "avatar", "tagName"]} />
          <TableBody data={profileData} />
      
      </>
  )
}

export default ProfilePage