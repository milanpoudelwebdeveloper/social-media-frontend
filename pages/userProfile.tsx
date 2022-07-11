import { NextPage } from 'next'
import React from 'react'
import ProfileLeft from '../components/UserProfile/ProfileLeft'

const UserProfile: NextPage = () => {
  return (
    <div className="profile">
      <ProfileLeft />
    </div>
  )
}

export default UserProfile
