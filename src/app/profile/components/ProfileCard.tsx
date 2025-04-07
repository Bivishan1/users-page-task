// app/profiles/components/ProfileCard.tsx
import React from 'react';

interface ProfileCardProps {
  id: number;
  name: string;
  email: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ id, name, email }) => {
  return (
    <div className="border p-4 rounded shadow-md place-items-center">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>ID: {id}</p>
      <p>Email: {name}</p>
      <p>Phone: {email}</p>
      <div className="back">
        
      </div>
    </div>
  );
};

export default ProfileCard;
