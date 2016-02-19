import React, { Component } from 'react'
import Firebase from 'firebase'
import { Link } from 'react-router'

let JobListingsRef

if (env === 'production') {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')
} else {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings-dev')
}

class Preview extends Component {
  handleSubmit () {
    JobListingsRef.push({
      name: this.props.jobs.newJob.name,
      title: this.props.jobs.newJob.title,
      description: this.props.jobs.newJob.description,
      city: this.props.jobs.newJob.city,
      country: this.props.jobs.newJob.country,
      email: this.props.jobs.newJob.email,
      website: this.props.jobs.newJob.website,
      how: this.props.jobs.newJob.how,
      createDate: new Date().getTime(),
      sponsored: this.props.jobs.newJob.sponsored
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className='container'>
        <Link to={`/post`} className='btn'>Go back!</Link>
          <p>Name: {this.props.jobs.newJob.name}</p>
          <p>Title: {this.props.jobs.newJob.title}</p>
          <p>Description: {this.props.jobs.newJob.description}</p>
          <p>City: {this.props.jobs.newJob.city}</p>
          <p>Country: {this.props.jobs.newJob.country}</p>
          <p>Website: {this.props.jobs.newJob.website}</p>
        <Link to={`/`} onClick={this.handleSubmit.bind(this)} className='btn'>Submit</Link>
      </div>
    )
  }
}

export default Preview
