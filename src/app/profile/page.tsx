import React from 'react'
import ProfileList from './components/ProfileList'

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4 place-items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Total Users</h1>
      <ProfileList />
    </div>
  )
}

export default ProfilePage