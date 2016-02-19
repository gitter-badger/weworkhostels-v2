import React, { Component } from 'react'
import Input from './Input.js'
import DescriptionInput from './DescriptionInput.js'
import { Link } from 'react-router'

class JobForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      title: '',
      description: '',
      city: '',
      country: '',
      email: '',
      website: '',
      how: '',
      sponsored: ''
    }
  }

  handleState (value) {
    this.setState(value)
  }

  handleNewJob () {
    // dispatch action
    let job = this.state
    this.props.actions.addNewJob(job)
  }

  render () {
    return (
      <div>
        <Input placeholder='Hostel name'     inputName='name'        handleState={this.handleState.bind(this)} />
        <Input placeholder='Job title'       inputName='title'       handleState={this.handleState.bind(this)} />
        <DescriptionInput                    inputName='description' handleState={this.handleState.bind(this)} />
        <Input placeholder='City'            inputName='city'        handleState={this.handleState.bind(this)} />
        <Input placeholder='Country'         inputName='country'     handleState={this.handleState.bind(this)} />
        <Input placeholder='Email'           inputName='email'       handleState={this.handleState.bind(this)} />
        <Input placeholder='Website'         inputName='website'     handleState={this.handleState.bind(this)} />
        <Input placeholder='How to apply'    inputName='how'         handleState={this.handleState.bind(this)} />
        <Input placeholder='Sponsored'       inputName='sponsored'   handleState={this.handleState.bind(this)} />

        <Link to={`post/preview`} onClick={this.handleNewJob.bind(this)} className='btn'>Preview</Link>
      </div>
    )
  }
}

export default JobForm

