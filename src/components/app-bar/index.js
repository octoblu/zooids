import React, { Component, PropTypes } from 'react'

// import './index.css'

import { FaCog } from 'react-icons/lib/fa'

export default class AppBar extends Component {
  state = {
    showSettings: false
  }

  constructor(props) {
    super(props)
  }

  toggleSettings = () => {
    this.setState({ showSettings: !this.state.showSettings })
  }

  render() {
    let settings = null
    if (this.state.showSettings ) {
      settings = <span aria-hidden="true">
        <a className="AppBar-link" href="/profile">Profile</a>
        <a className="AppBar-link" href="/guides">Guides</a>
        <a className="AppBar-link" href="/signout">Sign Out</a>
      </span>
    }

    return <div className="AppBar-container">
      <div className="AppBar">
        <a className="AppBar-link AppBar-link--logo" href="/design">
          <img className="AppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
        </a>

        <nav className="AppBar-nav AppBar-nav--primary">
          <a className="AppBar-link AppBar-link--is-selected" href="/design">Design</a>
          <a className="AppBar-link" href="/things">Things</a>
          <a className="AppBar-link" href="/bluprints">Bluprints</a>
        </nav>

        <nav className="AppBar-nav AppBar-nav--secondary">
          {settings}

          <button onClick={this.toggleSettings} aria-label="Open settings menu" className="AppBar-link">
            <FaCog className="AppBar-link-icon"/>
          </button>
        </nav>
      </div>
    </div>
  }
}
