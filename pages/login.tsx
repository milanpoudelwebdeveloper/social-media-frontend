import { NextPage } from 'next'
import React from 'react'
import LoginForm from '../components/LogInForm/LoginForm'

const Login: NextPage = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src="/images/logo.png" alt="logo" />
        <div className="appDesc">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas through the social media</h6>
        </div>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
