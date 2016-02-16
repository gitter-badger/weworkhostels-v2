import React, { Component } from 'react'

class JobDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }
  updateText(e) {
    var key = this.props.inputName
    var obj = {}
    obj[this.props.inputName] = e.target.innerHTML

    this.props.handleState(obj)

    this.setState({text: e.target.innerHTML})
  }
  render() {
    return (
      <div>
        <p>Job description:</p>
        <div
          contentEditable="true"
          className="description"
          onBlur={this.updateText.bind(this)}></div>
      </div>
    )
  }
}


export default JobDescription