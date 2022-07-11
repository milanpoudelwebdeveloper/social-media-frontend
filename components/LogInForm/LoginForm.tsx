import React from 'react'
import styles from './../SignUpForm/SignUpForm.module.css'
const LoginForm = () => {
  return (
    <div className="a-right">
      <form className={styles.infoForm}>
        <h3>Log In</h3>
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
        </div>
        <div>
          <span>Don&apos;t have an account? Register here</span>
        </div>
        <button type="submit" className={styles.signUpBtn}>
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginForm
