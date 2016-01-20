import React, { Component, PropTypes } from 'react'

class Job extends Component {
  getSpecificJob(jobsList, jobID) {
    let job
    jobsList.find((curr, index)=>{
      if(curr.id === jobID) {
        job = curr
      }
    })
    return job
  }
  render() {
    const jobID = this.props.location.pathname.toString().slice(5)
    const jobsList = this.props.jobs.list
    const job = this.getSpecificJob.call(this, jobsList, jobID)

    if (job === undefined) {
      return (
      <span></span>
      )
    } else {
      return (
        <div>
          <h1>
            {job.title}
          </h1>
          <p>
            {job.description}
          </p>
        </div>
      )
    }
  }
}


export default Job