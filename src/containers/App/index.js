import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'
import Body from '../../components/Body/'
import Sidebar from '../../components/Sidebar/'

import styles from './styles.css'

import '../../styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <Flexbox className={styles.root}>
        <Sidebar />
        <Body>{this.props.children}</Body>
      </Flexbox>
    )
  }
}

App.propTypes = propTypes
