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
      name: this.props.jobs.previewJob.name,
      title: this.props.jobs.previewJob.title,
      description: this.props.jobs.previewJob.description,
      city: this.props.jobs.previewJob.city,
      country: this.props.jobs.previewJob.country,
      email: this.props.jobs.previewJob.email,
      website: this.props.jobs.previewJob.website,
      how: this.props.jobs.previewJob.how,
      createDate: new Date().getTime(),
      sponsored: this.props.jobs.previewJob.sponsored
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className='container'>
        <div className='preview content'>
          <Link to={`/post`} className='btn'>Go back!</Link>
            <div className='info-container'>
              <div className='title'>{this.props.jobs.previewJob.title}</div>
              <div className='name'>{this.props.jobs.previewJob.name}</div>
              <div className='location'>{this.props.jobs.previewJob.city}, {this.props.jobs.previewJob.country}</div>
              <div className='website'>{this.props.jobs.previewJob.website}</div>
            </div>
            <div className='job-description'>{this.props.jobs.previewJob.description}</div>
            <div className='apply'>
              <h3>APPLY FOR THIS POSITION</h3>
              <p>{this.props.jobs.previewJob.how}</p>
            </div>
          <Link to={`/`} onClick={this.handleSubmit.bind(this)} className='btn'>Submit</Link>
        </div>
      </div>
    )
  }
}

export default Preview
