import React from 'react'
import styles from './PaymentsAccepted.module.scss'
import { Icon } from '..'

const PaymentsAccepted = () => (
  <div className={styles.row}>
    <span className={styles.text}>We accept:</span>
    <div className={styles.icon}>
      <Icon type='visa' className={styles.card} />
      <Icon type='amex' className={styles.card} />
      <Icon type='mastercard' className={styles.card} />
      <Icon type='paypal' className={styles.card} />
    </div>
  </div>
)

export default PaymentsAccepted
