import React, { Component, PropTypes } from 'react'
import Firebase from 'firebase'
const JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')

class JobListings extends Component {
  componentWillMount() {
    JobListingsRef.on('child_added', (snapshot) => {
      console.log('i am a child_added')
      this.props.actions.addJob(snapshot.val())
    })
  }

  render() {
    const { jobs } = this.props
    const { actions } = this.props
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