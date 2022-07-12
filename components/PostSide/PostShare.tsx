import React, { useRef, useState } from 'react'
import {
  AiOutlineClose,
  AiOutlineFileImage,
  AiOutlinePlayCircle,
  AiOutlineSchedule,
} from 'react-icons/ai'
import styles from './PostShare.module.css'
import { MdLocationPin } from 'react-icons/md'

const PostShare = () => {
  const [image, setImage] = useState<any>(null)
  const imageRef = useRef<any>()

  const onImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      setImage({
        image: URL.createObjectURL(img),
      })
    }
  }
  return (
    <div className={styles.postShare}>
      <img src={'/images/profileImg.jpg'} alt="profile-image" />
      <div>
        <input type="text" placeholder="What is happening" />
        <div className={styles.postOptions}>
          <div
            className={styles.option}
            style={{ color: 'var(--photo)' }}
            onClick={() => imageRef.current.click()}
          >
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
          <div style={{ display: 'none' }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className={styles.previewImage}>
            <AiOutlineClose
              onClick={() => setImage(null)}
              className={styles.closeIcon}
            />
            <img src={image.image} alt="preview" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
