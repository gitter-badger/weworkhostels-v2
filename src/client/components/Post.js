import React, { Component, PropTypes } from 'react'
import Firebase from 'firebase'

const JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newJob: ''
    }
  }
  componentWillMount() {
    JobListingsRef.on('child_added', (snapshot) => {
      this.props.actions.addJob(snapshot.val())
    })
  }
  handleSubmit() {
    const id = Math.random().toString(36).substring(7)
    const jobRef = JobListingsRef.child(id)

    jobRef.set({ // triggers child_added
      id,
      title: this.state.newJob,
      time: new Date().getTime()
    })
    this.setState({newJob: ''})
  }
  render() {
    const { actions } = this.props
    return (
      <form>
        <h1>POST IT HERE</h1>
        <input
          type="text"
          value={this.state.newJob}
          onChange={(event) => {
            let newJob = event.target.value
            this.setState({newJob}) }
          } />
        <button onClick={this.handleSubmit.bind(this)}>Add Jobs</button>
      </form>
    )
  }
}


export default Post