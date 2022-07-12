import React, { useState } from 'react'
import styles from './RightSide.module.css'
import { FiSettings } from 'react-icons/fi'
import TrendCard from '../Trends/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div className={styles.rightSide}>
      <div className={styles.navIcons}>
        <img src="/images/home.png" alt="Home" />
        <FiSettings size={20} />
        <img src="/images/noti.png" alt="Home" />
        <img src="/images/comment.png" alt="Home" />
      </div>
      <TrendCard />
      <button
        style={{ height: '3rem', width: '80%', alignSelf: 'center' }}
        onClick={() => setOpened(true)}
      >
        Share
      </button>
      <ShareModal openModal={opened} closeModal={() => setOpened(false)} />
    </div>
  )
}

export default RightSide
