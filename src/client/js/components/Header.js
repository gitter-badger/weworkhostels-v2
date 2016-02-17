import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

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
        <ul>
          <li>
            <Link to={`/`}>Job Listings</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/post`}>Post a Job</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
