import React from 'react'
import styles from './../SignUpForm/SignUpForm.module.css'

const ProfileInfoEditModal = () => {
  return (
    <form className={styles.infoForm}>
      <h3>Your Info</h3>
      <div>
        <input
          type="text"
          className={styles.infoInput}
          name="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          className={styles.infoInput}
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          type="text"
          className={styles.infoInput}
          name="worksAt"
          placeholder="Works at"
        />
      </div>
      <div>
        <input
          type="text"
          className={styles.infoInput}
          name="location"
          placeholder="Lives in"
        />
        <input
          type="text"
          className={styles.infoInput}
          name="country"
          placeholder="Country"
        />
      </div>
      <div>
        <input
          type="text"
          className={styles.infoInput}
          name="relationshipStatus"
          placeholder="Relationship Status"
        />
      </div>
      <div className={styles.imageContainer}>
        <div>
          <h5>Profile Image</h5>
          <input type="file" name="profileImg" />
        </div>

        <div>
          <h5>Cover Image</h5>
          <input type="file" name="coverImg" />
        </div>
      </div>
      <button type="submit" className={styles.signUpBtn}>
        Update
      </button>
    </form>
  )
}

export default ProfileInfoEditModal
