import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

const Sidebar = () => {
  return (
    <div className={styles.root}>
      <h1>Zooids</h1>

      <div className={styles.sectionHeader}>Colors</div>
      <div className={styles.sectionHeader}>Typography</div>
      <div className={styles.sectionHeader}>Components</div>
      <ul>
        <li>Buttons</li>
        <li>List</li>
        <li>Input</li>
        <li>Card</li>
        <li>Tabs</li>
      </ul>
    </div>
  )
}

Sidebar.propTypes    = propTypes
Sidebar.defaultProps = defaultProps

export default Sidebar
