import React, { Component } from 'react'
class SearchBar extends Component {
  render () {
    return (
      <div className='search-bar'>
        <input type="text" placeholder="&#xf002; Search: 'receptionist', 'london'"/>
      </div>
    )
  }
}

export default SearchBar
