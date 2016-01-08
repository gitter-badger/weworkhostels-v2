import React, { Component, PropTypes } from 'react'
import Input from './Input.js'
import Firebase from 'firebase'
const JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')

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
    const id = Math.random().toString(36).substring(7)
    const jobRef = JobListingsRef.child(id)

    jobRef.set({
      id,
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

  handleState (value, name) {
    // this.setState({namevalue})
  }

  render() {
    return (
      <div>
        <Input placeholder="Hostel name" handleState={this.handleState.bind(this)} />

        <input
          type="text"
          placeholder="hostel name"
          value={this.state.name}
          onChange={(event) => {
            let name = event.target.value
            this.setState({
                name: name
            })
          }
          } />
        <input type="text"
          placeholder="job title"
          value={this.state.title}
          onChange={(event) => {
            let title = event.target.value
            this.setState({
                title: title
            })
          }
          } />
        <input type="text"
          placeholder="job description"
          value={this.state.description}
          onChange={(event) => {
            let description = event.target.value
            this.setState({
                description: description
            })
          }
          } />
        <input type="text"
          placeholder="city"
          value={this.state.city}
          onChange={(event) => {
            let city = event.target.value
            this.setState({
                city: city
            })
          }
          } />
        <input type="text"
          placeholder="country"
          value={this.state.country}
          onChange={(event) => {
            let country = event.target.value
            this.setState({
                country: country
            })
          }
          } />
        <input type="text"
          placeholder="email"
          value={this.state.email}
          onChange={(event) => {
            let email = event.target.value
            this.setState({
                email: email
            })
          }
          } />
        <input type="text"
          placeholder="website"
          value={this.state.website}
          onChange={(event) => {
            let website = event.target.value
            this.setState({
                website: website
            })
          }
          } />
        <input type="text"
          placeholder="how"
          value={this.state.how}
          onChange={(event) => {
            let how = event.target.value
            this.setState({
                how: how
            })
          }
          } />
        <input type="text"
          placeholder="sponsored"
          value={this.state.sponsored}
          onChange={(event) => {
            let sponsored = event.target.value
            this.setState({
                sponsored: sponsored
            })
          }
          } />
        <button onClick={this.handleSubmit.bind(this)}>Add Jobs</button>
      </div>
    )
  }
}

export default JobForm