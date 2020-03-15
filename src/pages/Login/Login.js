import React, { useState } from 'react'

import { LoginForm } from '../../containers'
import Image from '../../images/lush-login.jpg'
import styles from './Login.module.scss'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <div className={styles.loginContainer}>
      <img src={Image} alt='lush' className={styles.image} />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        submit={() => {}}
      />
    </div>
  )
}

export default Login
