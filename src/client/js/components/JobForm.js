import React, { Component, PropTypes } from 'react'
import { ReduxRouter, pushState } from 'redux-router'
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

  validateForm () {
    var valid = true
    for (var field in this.state) {
      if (this.state[field] === '') {
        valid = false
        // console.log(field + ' is can not be empty!')
        // IF ITS NOT VALID, CHANGE ERROR PROPERTY TO TRUE....???
      }
    }
    return valid
  }

  handleNewJob () {
    if (this.validateForm()) {
      // add new job as the last previewed job to the Redux store
      // change location to post/preview
      let job = this.state
      this.props.actions.addPreviewJob(job)
      this.props.dispatch(pushState(null, '/post/preview'))
    }
  }

  render () {
    return (
      <div>
        <Input placeholder='Hostel name'     inputName='name'        handleState={this.handleState.bind(this)} errorMsg={false} />
        <Input placeholder='Job title'       inputName='title'       handleState={this.handleState.bind(this)} errorMsg={false} />
        <DescriptionInput                    inputName='description' handleState={this.handleState.bind(this)} errorMsg={false} />
        <Input placeholder='City'            inputName='city'        handleState={this.handleState.bind(this)} errorMsg={false} />
        <Input placeholder='Country'         inputName='country'     handleState={this.handleState.bind(this)} errorMsg={false} />
        <Input placeholder='Email'           inputName='email'       handleState={this.handleState.bind(this)} errorMsg={false} />
        <Input placeholder='Website'         inputName='website'     handleState={this.handleState.bind(this)} errorMsg={false} />
        <Input placeholder='How to apply'    inputName='how'         handleState={this.handleState.bind(this)} errorMsg={false} />
        <Input placeholder='Sponsored'       inputName='sponsored'   handleState={this.handleState.bind(this)} errorMsg={false} />

        <button onClick={this.handleNewJob.bind(this)} className='btn'>Preview</button>
      </div>
    )
  }
}

JobForm.propTypes = {
  jobs: PropTypes.object.isRequired, // Value of jobs prop should be an object.
  actions: PropTypes.objectOf(PropTypes.func).isRequired // Value of actions prop should be an object containing properties with functions as values.
}


export default JobForm

