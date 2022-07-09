import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="profileSide">Profile</div>
      <div className="postSide">Posts</div>
      <div className="rightSide">Right Side</div>
    </div>
  )
}

export default Home
