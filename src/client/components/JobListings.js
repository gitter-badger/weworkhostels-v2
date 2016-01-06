import React, { Component, PropTypes } from 'react'

class JobListings extends Component {
  componentDidMount() {
    // Firebase stuff will go here.
  }

  render() {
    const { jobListings } = this.props
    const list = this.props.jobListings.jobsList.map((jobObject, index) =>
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