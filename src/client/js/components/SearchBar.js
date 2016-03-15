import React, { Component } from 'react'
class SearchBar extends Component {
  handleSearch (e) {
    if (e.target.value === '') {
      this.props.actions.clearMatchedJobs()
    } else {
      this.props.searchJobs(e.target.value)
    }
  }
  render () {
    return (
      <div className='search-bar'>
        <input type="text" placeholder="&#xf002; Search: 'receptionist', 'london'" onChange={this.handleSearch.bind(this)}/>
      </div>
    )
  }
}

export default SearchBar
