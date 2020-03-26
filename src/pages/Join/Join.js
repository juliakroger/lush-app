import React, { useState } from 'react'

import { JoinForm } from '../../containers'
import Image from '../../images/lush-join.jpg'
import styles from './Join.module.scss'

const Join = () => {
  const [email, setEmail] = useState({
    email: null,
    confirmation: null
  })
  const [password, setPassword] = useState({
    password: null,
    confirmation: null
  })
  const [name, setName] = useState(null)
  const [phone, setPhone] = useState(null)

  return (
    <div className={styles.loginContainer}>
      <JoinForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email.email}
        setEmail={value => setEmail(prev => ({ ...prev, email: value }))}
        emailConfirmation={email.confirmation}
        setEmailConfirmation={value =>
          setEmail(prev => ({ ...prev, confirmation: value }))
        }
        password={password.password}
        setPassword={value =>
          setPassword(prev => ({ ...prev, password: value }))
        }
        passwordConfirmation={password.confirmation}
        setPasswordConfirmation={value =>
          setPassword(prev => ({ ...prev, confirmation: value }))
        }
        submit={() => {}}
      />
      <img src={Image} alt='lush' className={styles.image} />
    </div>
  )
}

export default Join
