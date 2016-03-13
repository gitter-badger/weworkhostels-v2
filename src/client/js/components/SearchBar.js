import React, { Component } from 'react'
import Firebase from 'firebase'

// TODO: Handle State

class SearchBar extends Component {
  constructor (props) {
    super() //http://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
    this.state = {
      term: '',
      results: []
    }
  }

  handleKeyPress (e) {
    this.setState({term: e.target.value})
    console.log("this is my state ", this.state)
    console.log(this)
    console.log(this.props.jobs)
  }

  render () {
    return (
      <div className='search-bar'>
        <input type="text"
               onKeyDown={this.handleKeyPress.bind(this)}
               placeholder="&#xf002; Search: 'receptionist', 'london'"/>
      </div>
    )
  }
}

export default SearchBar
