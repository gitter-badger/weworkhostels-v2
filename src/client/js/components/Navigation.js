import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import scss from '../../scss/base.scss'

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

export default Navigation