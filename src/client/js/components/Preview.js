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
        <div className='preview content'>
          <Link to={`/post`} className='btn'>Go back!</Link>
            <div className='info-container'>
              <div className='title'>{this.props.jobs.newJob.title}</div>
              <div className='name'>{this.props.jobs.newJob.name}</div>
              <div className='location'>{this.props.jobs.newJob.city}, {this.props.jobs.newJob.country}</div>
              <div className='website'>{this.props.jobs.newJob.website}</div>
            </div>
            <div className='job-description'>{this.props.jobs.newJob.description}</div>
            <div className='apply'>
              <h3>APPLY FOR THIS POSITION</h3>
              <p>{this.props.jobs.newJob.how}</p>
            </div>
          <Link to={`/`} onClick={this.handleSubmit.bind(this)} className='btn'>Submit</Link>
        </div>
      </div>
    )
  }
}

export default Preview
