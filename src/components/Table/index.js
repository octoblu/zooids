import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

const Table = ({ children }) => {
  return <table className={styles.root}>{children}</table>
}

Table.propTypes    = propTypes
Table.defaultProps = defaultProps

export default Table
