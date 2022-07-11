import React from 'react'
import styles from './SignUpForm.module.css'

const SignUpForm = () => {
  return (
    <div className="a-right">
      <form className={styles.infoForm}>
        <h3>Sign Up</h3>
        <div>
          <input
            placeholder="First Name"
            className={styles.infoInput}
            name="firstName"
          />
          <input
            placeholder="Last Name"
            className={styles.infoInput}
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            className={styles.infoInput}
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className={styles.infoInput}
            name="password"
            placeholder="password"
          />
          <input
            type="text"
            className={styles.infoInput}
            name="confirmPass"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span>Already have an account? Log in</span>
        </div>
        <button type="submit" className={styles.signUpBtn}>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
