import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

const Body = ({ children }) => {
  return (
    <Flexbox className={styles.root}>
      {children}
    </Flexbox>
  )
}

Body.propTypes    = propTypes
Body.defaultProps = defaultProps

export default Body
