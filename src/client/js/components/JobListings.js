import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class JobListings extends Component {
  render () {
    let list
    if (this.props.searchJobs.isSearching) {
      list = this.props.searchJobs.list.sort((a, b) => {
      // Sort job from newest Epoch timestamp (larger #) to earliest Epoch
      if (a.createDate > b.createDate) {
        return -1 // move a to lower index than b
      }
      if (a.createDate < b.createDate) {
        return 1 // move b to lower index than a
      }
      return 0 // leave a and b unchanged with respect to each other
      }).map((jobObject, index) =>
      // create an array of components
      <JobListItem key={index}
                   index={index}
                   date={jobObject.createDate}
                   title={jobObject.title}
                   name={jobObject.name}
                   city={jobObject.city}
                   country={jobObject.country}
                   id={jobObject.id} />
    )}

    else { // if search is not active
      list = this.props.jobs.list.sort((a, b) => {
      // Sort job from newest Epoch timestamp (larger #) to earliest Epoch
      if (a.createDate > b.createDate) {
        return -1 // move a to lower index than b
      }
      if (a.createDate < b.createDate) {
        return 1 // move b to lower index than a
      }
      return 0 // leave a and b unchanged with respect to each other
      }).map((jobObject, index) =>
      // create an array of components
      <JobListItem key={index}
                   index={index}
                   date={jobObject.createDate}
                   title={jobObject.title}
                   name={jobObject.name}
                   city={jobObject.city}
                   country={jobObject.country}
                   id={jobObject.id} />
    )}

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
