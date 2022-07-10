import React from 'react'
import {
  AiOutlineFileImage,
  AiOutlinePlayCircle,
  AiOutlineSchedule,
} from 'react-icons/ai'
import styles from './PostShare.module.css'
import { MdLocationPin } from 'react-icons/md'

const PostShare = () => {
  return (
    <div className={styles.postShare}>
      <img src={'/images/profileImg.jpg'} alt="profile-image" />
      <div>
        <input type="text" placeholder="What is happening" />
        <div className={styles.postOptions}>
          <div className={styles.option} style={{ color: 'var(--photo)' }}>
            <AiOutlineFileImage size={20} />
            Photo
          </div>
          <div className={styles.option} style={{ color: 'var(--video)' }}>
            <AiOutlinePlayCircle size={20} />
            Video
          </div>
          <div className={styles.option} style={{ color: 'var(--location)' }}>
            <MdLocationPin size={20} />
            Location
          </div>
          <div className={styles.option} style={{ color: 'var(--schedule)' }}>
            <AiOutlineSchedule size={20} />
            Schedule
          </div>
          <button className={styles.shareBtn}>Share</button>
        </div>
      </div>
    </div>
  )
}

export default PostShare
