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
              <Link to={`/About`}>About</Link>
          </li>
          <li>
              <Link to={`/PostaJob`}>Post a Job</Link>
          </li>
        </ul>
      </div>
      )
  }
}

export default Navigation