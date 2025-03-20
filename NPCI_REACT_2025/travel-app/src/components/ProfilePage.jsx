import React from 'react';
import TableHead from '../ui/TableHead';
import TableBody from '../ui/TableBody';
import { useData } from '../customHooks/useData';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();
  const [profileData] = useData('http://localhost:3000/profiles');

  const filteredData = id 
  ? profileData.filter(profile => profile.id == parseInt(id)) // Filter by ID if exists
  : profileData; 

  return (
    <>
      {/* <TableHead columns={["id", "Name", "avatar", "tagName"]} />
      {profile ? <TableBody data={[profile]} /> : <p>Profile not found</p>} */}
          
      <TableHead columns={["id", "Name", "avatar", "tagName"]} />
      {filteredData.length > 0 ? (
        <TableBody data={filteredData} />
      ) : (
        <p>Profile not found</p> 
      )}
    </>
  );
};

export default ProfilePage;
