import { NextPage } from 'next'
import React from 'react'
import RightSide from '../components/RightSide/RightSide'
import ProfileCenter from '../components/UserProfile/ProfileCenter'
import ProfileLeft from '../components/UserProfile/ProfileLeft'

const UserProfile: NextPage = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <ProfileCenter />
      <RightSide />
    </div>
  )
}

export default UserProfile
