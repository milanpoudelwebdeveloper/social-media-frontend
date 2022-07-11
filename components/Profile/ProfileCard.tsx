import React from 'react'
import styles from './ProfileCard.module.css'

const ProfileCard = () => {
  const profilePage = false
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImages}>
        <img src="/images/cover.jpg" alt="cover" />
        <img src="/images/profileImg.jpg" alt="profile" />
      </div>
      <div className={styles.profileName}>
        <span>Zendaya</span>
        <span>Senior UI/UX designer</span>
      </div>
      <div className={styles.followStatus}>
        <hr />
        <div>
          <div className={styles.follow}>
            <span>6,000</span>
            <span>followers</span>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.follow}>
            <span>1,000</span>
            <span>followings</span>
          </div>
          {profilePage && (
            <>
              <div className={styles.verticalLine}></div>
              <div className={styles.follow}>
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {!profilePage && <span>My Profile</span>}
    </div>
  )
}

export default ProfileCard
