import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import styles from './InfoCard.module.css'

const InfoCard = () => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHead}>
        <h4>Your Info</h4>
        <AiOutlineEdit size={20} style={{ cursor: 'pointer' }} />
      </div>
      <div className={styles.info}>
        <span>
          <b>Status</b>
        </span>
        <span>In a relationship</span>
      </div>
      <div className={styles.info}>
        <span>
          <b>Lives in</b>
        </span>
        <span>Nepal</span>
      </div>
      <div className={styles.info}>
        <span>
          <b>Works at</b>
        </span>
        <span>Safalza Technology</span>
      </div>
      <button className={styles.logOutBtn}>Log out</button>
    </div>
  )
}

export default InfoCard
