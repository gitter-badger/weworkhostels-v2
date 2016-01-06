import React, { Component, PropTypes } from 'react'
import JobForm from './JobForm.js'

import Firebase from 'firebase'
const JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')

class Post extends Component {
  componentWillMount() {
    JobListingsRef.on('child_added', (snapshot) => {
      this.props.actions.addJob(snapshot.val())
    })
  }
  render() {
    const { actions } = this.props
    return (
      <div>
        <h1>POST IT HERE</h1>
        <JobForm />
      </div>
    )
  }
}


export default Post