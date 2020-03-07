import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.scss'

const Input = ({
  placeholder,
  value,
  valueChange,
  id,
  label,
  secondaryLabel
}) => (
  <div className={styles.inputContainer}>
    <div className={styles.labels}>
      {label && <div className={styles.label}>{label}</div>}
      {secondaryLabel && (
        <div className={styles.secondaryLabel}>{secondaryLabel}</div>
      )}
    </div>
    <input
      placeholder={placeholder}
      value={value}
      onChange={e => valueChange(e.target.value)}
      id={id}
      className={styles.input}
    />
  </div>
)

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  valueChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string
}

Input.defaultProps = {
  placeholder: '',
  label: null,
  secondaryLabel: null
}

export default Input
