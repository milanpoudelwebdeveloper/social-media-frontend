import React from 'react'
import { postsData } from '../../data/postsData'
import PostCard from './PostCard'
import styles from './Posts.module.css'
const Posts = () => {
  return (
    <div className={styles.posts}>
      {postsData.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  )
}

export default Posts
