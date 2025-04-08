// app/profiles/components/ProfileCard.tsx
import React from 'react';
import { User } from '@/lib/api';
import BackBtn from '@/components/atoms/BackBtn';


const ProfileCard: React.FC<User> = ({ id, name, email }) => {
  return (
    <>
    <div className="border p-4 rounded shadow-md place-items-center">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* back button */}
       {/* Back Button */}
      
    </div>
     <BackBtn/>
    </>
  );
};

export default ProfileCard;
