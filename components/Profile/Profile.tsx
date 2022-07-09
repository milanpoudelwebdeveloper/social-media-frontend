import React from 'react'
import LogoSearch from './LogoSearch'
import styles from './Profile.module.css'
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <LogoSearch />
      <ProfileCard />
    </div>
  )
}

export default Profile
