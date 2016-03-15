import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

let compare = (a, b) => {
  // Sort job from newest Epoch timestamp (larger #) to earliest Epoch
  if (a.createDate > b.createDate) {
    return -1
  }
  if (a.createDate < b.createDate) {
    return 1
  }
  return 0
}

let makeIntoComponent = (jobObject, index) =>
  // return a unique <JobListItem /> component
  <JobListItem key={index}
               index={index}
               date={jobObject.createDate}
               title={jobObject.title}
               name={jobObject.name}
               city={jobObject.city}
               country={jobObject.country}
               id={jobObject.id} />

class JobListings extends Component {
  render () {
    let list
    if (this.props.searchJobs.isSearching) {
      list = this.props.searchJobs.list.sort(compare).map(makeIntoComponent)
    } else {
      // if search is NOT ACTIVE
      list = this.props.jobs.list.sort(compare).map(makeIntoComponent)
    }
    return (
      <div className='container'>
        <div className='job-listings content'>
          <h1>Job Listings</h1>
          {list}
        </div>
      </div>
    )
  }
}

class JobListItem extends Component {
  getDate (epoch) {
    var humanDate = new Date(epoch)
    return humanDate.toDateString()
  }
  render () {
    const id = this.props.id
    let location = '/job/' + id
    return (
      <li>
        <Link to={location}>
          <span className='date'>{this.getDate(this.props.date)}</span>
          <span> | </span>
          <span className='title'>{this.props.title}</span>
          <span> at </span>
          <span className='name'>{this.props.name} </span>
          <span className='location'>{this.props.city}, {this.props.country}</span>
        </Link>
      </li>
    )
  }
}

JobListings.propTypes = {
  jobs: PropTypes.object.isRequired, // Value of jobs prop should be an object.
  actions: PropTypes.objectOf(PropTypes.func).isRequired, // Value of actions prop should be an object containing properties with functions as values.
}

export default JobListings
