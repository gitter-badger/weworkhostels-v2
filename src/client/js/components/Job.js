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
  getDate(epoch) {
    var humanDate = new Date(epoch)
    return humanDate.toDateString()
  }
  render() {
    const jobID = this.props.location.pathname.toString().slice(5)
    const jobsList = this.props.jobs.list
    const job = this.getSpecificJob.call(this, jobsList, jobID)
    console.log(job)

    if (job === undefined) {
      return (
      <span></span>
      )
    } else {
      return (
        <div className="job content">
          <div className="info-container">
            <div className="title">{job.title}</div>
            <div>Posted {this.getDate(job.createDate)}</div>
            <div className="name">{job.name}</div>
            <div className="location">{job.city}, {job.country}</div>
            <div>{job.website}</div>
          </div>
          <div className="job-description">{job.description}</div>
        </div>
      )
    }
  }
}


export default Job