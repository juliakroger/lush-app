import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const Button = ({ text, type, clickFunction, id }) => {
  return (
    <button className={styles[type]} onClick={clickFunction} id={id}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'buttonDark',
    'buttonLight',
    'buttonRed',
    'buttonMint'
  ]),
  clickFunction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

Button.defaultProps = {
  text: '',
  type: 'buttonDark'
}

export default Button
