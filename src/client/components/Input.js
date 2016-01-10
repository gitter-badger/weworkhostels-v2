import React, { Component, PropTypes } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }
  updateText(e) {
    var key = this.props.inputName
    var obj = {}
    obj[this.props.inputName] = e.target.value

    this.props.handleState(obj)

    // set the value of our <input>
    this.setState({text: e.target.value})
  }
  render() {
    return(
        <input
          type="text"
          placeholder={this.props.placeholder}
          onChange={this.updateText.bind(this)}
          value={this.state.text} />
    )
  }
}

export default Input