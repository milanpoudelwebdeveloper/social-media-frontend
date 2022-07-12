import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from './LogoSearch'
import styles from './Profile.module.css'
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  )
}

export default Profile
