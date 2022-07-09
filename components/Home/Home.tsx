import React from 'react'
import Profile from '../Profile/Profile'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Profile />
      <div className="postSide">Posts</div>
      <div className="rightSide">Right Side</div>
    </div>
  )
}

export default Home
