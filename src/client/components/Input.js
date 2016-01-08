import React, { Component, PropTypes } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }
  updateText(e) {
    this.props.handleState(e.target.value)
    this.setState({text: e.target.value})
  }
  render() {
    console.log(this.state, this.props)
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