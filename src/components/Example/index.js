import React, { PropTypes } from 'react'
import Highlight from 'react-highlight'
import ReactDOMServer from 'react-dom/server'

import "../../../node_modules/highlight.js/styles/github.css"

const propTypes = {
  children: PropTypes.node,
}

const Example = ({ children }) => {
  return (
    <Highlight className="html">
      {`${children}`}
    </Highlight>
  )
}

Example.propTypes = propTypes

export default Example
