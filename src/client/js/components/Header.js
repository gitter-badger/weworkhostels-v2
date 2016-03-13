import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

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
      <Link className='nav-logo' to={`/`}>
          <h1>We Work Hostels</h1>
          <span>Work Exchange</span>
      </Link>
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
