import React, { Component, PropTypes } from 'react'
import JobForm from './JobForm.js'

class Post extends Component {
  render () {
    return (
      <div className='container'>
        <div className='post content'>
          <h1>Post a Hostel Job</h1>
          <JobForm actions={this.props.actions} jobs={this.props.jobs} />
        </div>
      </div>
    )
  }
}

export default Post
