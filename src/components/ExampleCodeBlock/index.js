import React, { PropTypes } from 'react'
import Highlight from 'react-highlight'
import ReactDOMServer from 'react-dom/server'

import "../../../node_modules/highlight.js/styles/github.css"

const propTypes = {
  children: PropTypes.node,
}

const ExampleCodeBlock = ({ children }) => {
  return (
    <Highlight className="html">
      { ReactDOMServer.renderToStaticMarkup(children) }
    </Highlight>
  )
}

ExampleCodeBlock.propTypes = propTypes

export default ExampleCodeBlock
