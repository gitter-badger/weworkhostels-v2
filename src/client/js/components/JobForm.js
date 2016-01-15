import React, { Component, PropTypes } from 'react'
import Input from './Input.js'
import Firebase from 'firebase'
const JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')
import { Link } from 'react-router'
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

    this.setState({
      name: "",
      title: "",
      description: "",
      city: "",
      country: "",
      email: "",
      website: "",
      how: "",
      sponsored: ""
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
        <Input placeholder="Job description" inputName="description" handleState={this.handleState.bind(this)} />
        <Input placeholder="City"            inputName="city"        handleState={this.handleState.bind(this)} />
        <Input placeholder="Country"         inputName="country"     handleState={this.handleState.bind(this)} />
        <Input placeholder="E-mail"          inputName="email"       handleState={this.handleState.bind(this)} />
        <Input placeholder="Website"         inputName="website"     handleState={this.handleState.bind(this)} />
        <Input placeholder="How?"            inputName="how"         handleState={this.handleState.bind(this)} />
        <Input placeholder="Sponsored"       inputName="sponsored"   handleState={this.handleState.bind(this)} />

        <Link to={`/`} onClick={this.handleSubmit.bind(this)}>Add Job</Link>
      </div>
    )
  }
}

export default JobForm