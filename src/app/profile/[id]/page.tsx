'use client';
// app/profiles/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProfileCard from '../components/ProfileCard';

const ProfileDetailPage: React.FC = () => {

  interface Profile {
    id: number;
    name: string;
    email: string;  }

  const [profile, setProfile] = useState<Profile | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch individual profile based on ID
      const fetchProfile = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setProfile(data);
      };
      fetchProfile();
    }
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <>
    <ProfileCard id={profile.id} name={profile.name} email={profile.email} />
    </>
    // <div className="container mx-auto p-4">
    //   <h1 className="text-4xl font-bold">{profile.id}</h1>
    //   <p>Email: {profile.name}</p>
    //   <p>Phone: {profile.email}</p>
    // </div>
  );
};

export default ProfileDetailPage;
