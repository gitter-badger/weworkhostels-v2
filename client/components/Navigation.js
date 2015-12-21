import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {
  render () {
    return (
      <div>
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
      </div>
      )
  }
}

export default Navigation