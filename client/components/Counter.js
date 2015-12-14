import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// React component

class Navigation extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
              <Link to={`/About`}>About</Link>
          </li>
          <li>
              <Link to={`/PostaJob`}>Post a Job</Link>
          </li>
          <li>
              <Link to={`/JobListings`}>Job Listings</Link>
          </li>
        </ul>
      </div>
      )
  }
}

class Counter extends React.Component {
  render () {
    const { value, onIncreaseClick } = this.props

    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <Navigation />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

export default Counter