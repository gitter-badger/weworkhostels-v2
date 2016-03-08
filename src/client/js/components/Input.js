import React, { Component } from 'react'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  updateText (e) {
    var key = this.props.inputName
    var obj = {}
    obj[this.props.inputName] = e.target.value

    this.props.handleState(obj)

    // set the value of our <input>
    this.setState({text: e.target.value})
  }

  getErrorMessage () {
    // if there is an error, return a message
    // else return null
    if (this.props.errorMsg) {
      return this.props.placeholder + ' is not valid!'
    } else {
      return null
    }
  }

  render () {
    return (
      <div className='label'>
        <span>{this.props.placeholder}:</span>
        <input
          type='text'
          placeholder={this.props.placeholder}
          onChange={this.updateText.bind(this)}
          value={this.state.text} />
        <span>{this.getErrorMessage()}</span>
      </div>
    )
  }
}

export default Input
