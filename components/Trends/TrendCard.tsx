import React from 'react'
import { trendsData } from '../../data/trendsData'
import styles from './TrendCard.module.css'

const TrendCard = () => {
  return (
    <div className={styles.trendCard}>
      <h3>Trends for you</h3>
      {trendsData.map(({ id, name, shares }) => (
        <div className={styles.trend} key={id}>
          <span className={styles.trendName}>#{name}</span>
          <span className={styles.trendShares}>#{shares} shares</span>
        </div>
      ))}
    </div>
  )
}

export default TrendCard
