import React from 'react'
import Img from 'gatsby-image'

import styles from './form.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <input type="text" placeholder="signup with you name and email" />
    <input type="email" />
  </div>
)
