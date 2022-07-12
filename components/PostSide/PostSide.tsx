import React from 'react'
import Posts from './Posts'
import PostShare from './PostShare'
import styles from './PostSide.module.css'

const PostSide = () => {
  return (
    <div className={styles.postSide}>
      <PostShare />
      <Posts />
    </div>
  )
}

export default PostSide
