import React from 'react'
import { Icon, SubscriptionButton, PaymentsAccepted } from '..'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.allLinks}>
          <div className={styles.list}>
            <span className={styles.title}>Customer Care</span>
            <a href='/'>Contact</a>
            <a href='/'>Shipping</a>
            <a href='/'>Returns</a>
            <a href='/'>FAQ</a>
            <a href='/'>Policies</a>
          </div>
          <div className={styles.list}>
            <span className={styles.title}>Discover</span>
            <a href='/'>Our Story</a>
          </div>
        </div>

        <div className={styles.newsSubscription}>
          <span className={styles.title}>Get the latest Lush News!</span>
          <SubscriptionButton />
          <PaymentsAccepted />
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.socialIcons}>
          <div className={styles.icon}>
            <Icon type='twitter' />
          </div>
          {/* facebook */}
          <div className={styles.icon}>
            <Icon type='github' />
          </div>
          <div className={styles.icon}>
            <Icon type='instagram' />
          </div>
        </div>

        <div className={styles.developedBy}>
          <span>
            Developed with <Icon type='heart' /> by Júlia Kroger.
          </span>
        </div>

        <div className={styles.company}>
          <span>©2020 - Lush Brazil used for portfolio.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
