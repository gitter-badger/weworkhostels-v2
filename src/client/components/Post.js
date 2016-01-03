import React, { Component, PropTypes } from 'react'

class Post extends Component {
  handleSubmit() {
    this.props.actions.addJob({"id": 23, "title": "Programmer"})
  }
  render() {
    const { actions } = this.props
    return (
      <div>
        <h1>POST IT HERE</h1>
        <button onClick={this.handleSubmit.bind(this)}>Add Jobs</button>
      </div>
    )
  }
}


export default Post