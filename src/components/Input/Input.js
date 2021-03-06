import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.scss'

const Input = ({
  placeholder,
  value,
  valueChange,
  id,
  label,
  secondaryLabel,
  clickSecondary,
  type,
  blurButtonFunction,
  isRequired
}) => (
  <div className={styles.inputContainer}>
    <div className={styles.labels}>
      {label && <div className={styles.label}>{label}</div>}
      {secondaryLabel && (
        <div
          id='#secondary-label'
          className={
            clickSecondary
              ? styles.secondaryLabelClickable
              : styles.secondaryLabel
          }
          onClick={clickSecondary}
        >
          {secondaryLabel}
        </div>
      )}
    </div>
    <input
      placeholder={placeholder}
      value={value}
      onChange={e => valueChange(e.target.value)}
      id={id}
      className={styles.input}
      type={type}
      onBlur={() => blurButtonFunction()}
      required={isRequired}
    />
  </div>
)

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  valueChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.any,
  secondaryLabel: PropTypes.any,
  clickSecondary: PropTypes.func,
  type: PropTypes.string,
  blurButtonFunction: PropTypes.func,
  isRequired: PropTypes.bool
}

Input.defaultProps = {
  placeholder: '',
  label: null,
  secondaryLabel: null,
  type: 'input',
  blurButtonFunction: () => {},
  isRequired: false
}

export default Input
