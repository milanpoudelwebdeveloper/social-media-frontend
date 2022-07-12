import React from 'react'
import Posts from '../PostSide/Posts'
import PostShare from '../PostSide/PostShare'
import ProfileCard from '../Profile/ProfileCard'
import styles from './ProfileCenter.module.css'

const ProfileCenter = () => {
  return (
    <div className={styles.profileCenter}>
      <ProfileCard />
      <div>
        <PostShare />
        <Posts />
      </div>
    </div>
  )
}

export default ProfileCenter
