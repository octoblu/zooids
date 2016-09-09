import React, { PropTypes } from 'react'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

const Example = ({ children }) => {
  return <div>{children}</div>
}

Example.propTypes    = propTypes
Example.defaultProps = defaultProps

export default Example
