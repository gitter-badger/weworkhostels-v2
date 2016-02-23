import React, { Component, PropTypes } from 'react'
import { IndexLink } from 'react-router'

class Header extends Component {
  render () {
    return (
      <div className='header-container'>
        <header>
          <NavLogo />
          <Navigation />
        </header>
      </div>
    )
  }
}

class NavLogo extends Component {
  render () {
    return (
      <div className='nav-logo'>
        <h1>We Work Hostels</h1>
        <span>Work Exchange</span>
      </div>
    )
  }
}

class Navigation extends Component {
  render () {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <IndexLink activeClassName="active" to={`/`}>Job Listings</IndexLink>
          </li>
          <li>
            <IndexLink activeClassName="active" to={`/about`}>About</IndexLink>
          </li>
          <li>
            <IndexLink activeClassName="active" to={`/post`}>Post a Job</IndexLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
