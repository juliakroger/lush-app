import React from 'react'
import PropTypes from 'prop-types'

import { Input, Button } from '../../components'
import styles from './LoginForm.module.scss'

const LoginForm = ({ email, setEmail, password, setPassword, submit }) => {
  return (
    <div className={styles.loginForm}>
      <h1>Sign In</h1>
      <Input
        placeholder='amy@example.com'
        value={email}
        valueChange={value => setEmail(value)}
        id='#signin-email'
        label='Email'
        type='email'
      />
      <Input
        value={password}
        valueChange={value => setPassword(value)}
        id='#signin-password'
        label='Password'
        secondaryLabel='Forgot password?'
        type='password'
        clickSecondary={() => {}}
      />

      <Button
        text='sign in'
        type={!email || !password ? 'buttonLight' : 'buttonMint'}
        id='#login-button'
        clickFunction={submit}
      />
      <span>
        Don&apos;t have an account? Create one <a href='/'>here</a>.
      </span>
    </div>
  )
}

LoginForm.propTypes = {
  email: PropTypes.any,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.any,
  setPassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default LoginForm
