import React, { Component, PropTypes } from 'react'

class JobListings extends Component {
  componentDidMount() {
    // Firebase stuff will go here.
  }

  render() {
    const { jobs } = this.props
    const list = this.props.jobs.list.map((jobObject, index) =>
      <li key={index}>
        {jobObject.title}
      </li>
    )

    return (
      <div><h1>List of jobs here</h1>
        {list}
      </div>
    )
  }
}

// JobListings.propTypes = {
//   jobListings: PropTypes.array.isRequired
// }

export default JobListings