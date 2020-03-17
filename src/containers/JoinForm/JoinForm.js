import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Input, Button } from '../../components'
import styles from './JoinForm.module.scss'

const JoinForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  emailConfirmation,
  setEmailConfirmation,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  submit
}) => {
  const [error, setError] = useState(null)

  const checkRequiredValues = () =>
    !name || !email || !emailConfirmation || !password || !passwordConfirmation

  const hasSomeError = () => {
    if (email && emailConfirmation && email !== emailConfirmation) {
      setError("Emails don't match.")
    }

    if (password && passwordConfirmation && password !== passwordConfirmation) {
      setError("Passwords don't match.")
    }
  }

  return (
    <div className={styles.loginForm}>
      <h1>Create new Account</h1>
      <Input
        placeholder='Your name'
        value={name}
        valueChange={value => setName(value)}
        id='#join-name'
        label='Name *'
        type='text'
      />
      <Input
        placeholder='Phone'
        value={phone}
        valueChange={value => setPhone(value)}
        id='#join-phone'
        label='Phone'
        type='text'
      />
      <Input
        placeholder='amy@example.com'
        value={email}
        valueChange={value => setEmail(value)}
        id='#signin-email'
        label='Email *'
        type='email'
        blurButtonFunction={hasSomeError}
      />
      <Input
        placeholder='amy@example.com'
        value={emailConfirmation}
        valueChange={value => setEmailConfirmation(value)}
        id='#signin-email-confirmation'
        label='Email Confirmation *'
        type='email'
        blurButtonFunction={hasSomeError}
      />

      <Input
        value={password}
        valueChange={value => setPassword(value)}
        id='#signin-password'
        label='Password *'
        type='password'
        blurButtonFunction={hasSomeError}
      />

      <Input
        value={passwordConfirmation}
        valueChange={value => setPasswordConfirmation(value)}
        id='#signin-password'
        label='Password Confirmation *'
        type='password'
        blurButtonFunction={hasSomeError}
      />
      <Button
        text='sign in'
        type={checkRequiredValues() ? 'buttonLight' : 'buttonMint'}
        id='#login-button'
        clickFunction={submit}
      />
      {error ? <span className={styles.error}>{error}</span> : null}
    </div>
  )
}

JoinForm.propTypes = {
  name: PropTypes.any,
  phone: PropTypes.any,
  email: PropTypes.any,
  emailConfirmation: PropTypes.any,
  password: PropTypes.any,
  passwordConfirmation: PropTypes.any,
  setName: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setEmailConfirmation: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setPasswordConfirmation: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}
export default JoinForm
