import React, { Component, PropTypes } from 'react'
import Input from './Input.js'
import Firebase from 'firebase'
import { Link } from 'react-router'

let JobListingsRef

if (env === 'production') {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')
} else {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings-dev')
}

class JobForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      title: "",
      description: "",
      city: "",
      country: "",
      email: "",
      website: "",
      how: "",
      sponsored: ""
    }
  }

  handleSubmit() {
    JobListingsRef.push({
      name: this.state.name,
      title: this.state.title,
      description: this.state.description,
      city: this.state.city,
      country: this.state.country,
      email: this.state.email,
      website: this.state.website,
      how: this.state.how,
      createDate: new Date().getTime(),
      sponsored: this.state.sponsored,
    })
  }

  handleState (value) {
    this.setState(value)
  }

  render() {
    return (
      <div>
        <Input placeholder="Hostel name"     inputName="name"        handleState={this.handleState.bind(this)} />
        <Input placeholder="Job title"       inputName="title"       handleState={this.handleState.bind(this)} />
        <JobDescription />
        <Input placeholder="City"            inputName="city"        handleState={this.handleState.bind(this)} />
        <Input placeholder="Country"         inputName="country"     handleState={this.handleState.bind(this)} />
        <Input placeholder="Email"           inputName="email"       handleState={this.handleState.bind(this)} />
        <Input placeholder="Website"         inputName="website"     handleState={this.handleState.bind(this)} />
        <Input placeholder="How to apply"    inputName="how"         handleState={this.handleState.bind(this)} />
        <Input placeholder="Sponsored"       inputName="sponsored"   handleState={this.handleState.bind(this)} />

        <Link to={`/`} onClick={this.handleSubmit.bind(this)}>Add Job</Link>
      </div>
    )
  }
}

class JobDescription extends Component {
  render() {
    return (
      <div>
        <p>Job description:</p>
        <div
          contentEditable="true"
          className="description"></div>
      </div>
    )
  }
}

export default JobForm
