import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../Profile/LogoSearch'
import InfoCard from './InfoCard'
import styles from './ProfileLeft.module.css'

const ProfileLeft = () => {
  return (
    <div className={styles.profileLeft}>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft
