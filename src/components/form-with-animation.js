import React from 'react'
import Img from 'gatsby-image'

import styles from './form.module.css'

export default ({url}) => (
  <div className={styles.form}>
    <h2>sign up for stackhawk today</h2>
    <Img alt="" fluid={url} className={styles.image} />
    <label>
    Name
    <input type="text" placeholder="signup with you name and email" />
    </label>
    <label>
    email
    <input type="email" />
    <button type="submit" />
    </label>
  </div>
)
