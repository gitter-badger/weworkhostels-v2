import React, { Component } from 'react'

class DescriptionInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  updateText (e) {
    var key = this.props.inputName
    var obj = {}
    obj[key] = e.target.innerHTML

    this.props.handleState(obj)

    this.setState({text: e.target.innerHTML})
  }
  render () {
    return (
      <div>
        <div className='description-title'>Job description:</div>
        <div
          contentEditable='true'
          className='description'
          onBlur={this.updateText.bind(this)}></div>
      </div>
    )
  }
}

export default DescriptionInput
