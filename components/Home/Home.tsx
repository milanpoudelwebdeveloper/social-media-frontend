import React from 'react'
import PostSide from '../PostSide/PostSide'
import Profile from '../Profile/Profile'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Profile />
      <PostSide />
      <div className="rightSide">Right Side</div>
    </div>
  )
}

export default Home
