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

    var searchResults = this.props.jobs['list'].filter((el) => {
      for (var key in el) {
        if (typeof el[key] === 'number') {

        } else {
          if (el[key].includes(e.target.value)) {
            return true
          }       
        }
      }
    })

    this.setState({results: searchResults}) // maybe we should stick this into redux's single store

    // Now we must re-render JobListings component with these search results.

    // Shall we just replace the original jobs data (in Redux store) with this new result? 
    // Everytime the data in the store changes, React will re-render the jobListings component.

    // To do that we must dispatch an action...

    console.log(this.state)
  }

  render () {
    console.log(this)
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
