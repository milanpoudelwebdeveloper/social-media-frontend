import React from 'react'
import styles from './PostCard.module.css'

interface props {
  post: {
    img: string
    name: string
    desc: string
    likes: number
    liked: boolean
  }
}

const PostCard: React.FC<props> = ({
  post: { img, name, desc, likes, liked },
}) => {
  return (
    <div className={styles.post}>
      <img src={img} alt="post-image" />
      <div className={styles.reaction}>
        <img
          src={!liked ? '/images/notlike.png' : '/images/like.png'}
          alt="like"
        />
        <img src="/images/comment.png" />
        <img src="/images/share.png" />
      </div>
      <span>{likes} likes</span>
      <div className={styles.postDetails}>
        <span>
          <b>{name}</b>
        </span>
        <span>{desc}</span>
      </div>
    </div>
  )
}

export default PostCard
