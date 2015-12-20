import React, { Component, PropTypes } from 'react'

class PostaJob extends Component {
  render() {
    const { onAddClick } = this.props
    console.log(this.props)

    return (
      <div>
        <h1>POST IT HERE</h1>
        <button onClick={onAddClick}>Add Jobs</button>
      </div>
    )
  }
}


export default PostaJob