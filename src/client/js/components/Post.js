import React, { Component, PropTypes } from 'react'
import JobForm from './JobForm.js'

class Post extends Component {
  render() {
    const { actions } = this.props
    return (
      <div className="container">
        <div className="post content">
          <h1>POST IT HERE</h1>
          <JobForm />
        </div>
      </div>
    )
  }
}


export default Post