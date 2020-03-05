import React from 'react'
import PropTypes from 'prop-types'

import styles from './SubscriptionButton.module.scss'

const SubscriptionButton = ({ clickSubscribe }) => {
  return (
    <div className={styles.newsletterButton}>
      <input
        id='newsletter-email'
        type='email'
        name='email'
        placeholder='Your email'
        className={styles.subscribeInput}
      ></input>

      <button
        id='subscribe-button'
        className={styles.subscribeButton}
        onClick={clickSubscribe}
      >
        Subscribe
      </button>
    </div>
  )
}

SubscriptionButton.propTypes = {
  clickSubscribe: PropTypes.func
}

SubscriptionButton.defaultProps = {
  clickSubscribe: () => {}
}

export default SubscriptionButton
