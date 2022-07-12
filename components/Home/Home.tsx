import React from 'react'
import PostSide from '../PostSide/PostSide'
import Profile from '../Profile/Profile'
import RightSide from '../RightSide/RightSide'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Profile />
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home
