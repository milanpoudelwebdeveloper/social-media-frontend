import React from 'react'
import { followersData } from '../../data/followersData'
import styles from './FollowersCard.module.css'

const FollowersCard = () => {
  return (
    <div className={styles.followersCard}>
      <h3>Who is following you</h3>
      {followersData.map(({ id, name, username, image }) => (
        <div className={styles.follower} key={id}>
          <div>
            <img src={image} alt={name} className={styles.followerImg} />
            <div className={styles.name}>
              <span className={styles.followerName}>{name}</span>
              <span className={styles.followerUsername}>@{username}</span>
            </div>
          </div>
          <button className={styles.fcButton}>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default FollowersCard
