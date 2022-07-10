import React from 'react'
import PostShare from './PostShare'
import styles from './PostSide.module.css'

const PostSide = () => {
  return (
    <div className={styles.postSide}>
      <PostShare />
    </div>
  )
}

export default PostSide
