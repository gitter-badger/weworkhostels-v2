import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class JobListings extends Component {
  render() {
    const { jobs } = this.props
    const { actions } = this.props
    const list = this.props.jobs.list.sort(function(a, b) {
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
    )

    return (
      <div className="container">
        <div className="job-listings content">
          <h1>Job Listings</h1>
          {list}
        </div>
      </div>
    )
  }
}


class JobListItem extends Component {
  getDate(epoch) {
    var humanDate = new Date(epoch)
    return humanDate.toDateString()
  }
  render() {
    const id = this.props.id
    let location = '/job/' + id
    return (
      <li>
        <Link to={location}>
          <span className="date">{this.getDate(this.props.date)}</span>
          <span> | </span>
          <span className="title">{this.props.title}</span>
          <span> at </span>
          <span className="name">{this.props.name} </span>
          <span className="location">{this.props.city}, {this.props.country}</span>
        </Link>
      </li>
    )
  }
}



JobListings.propTypes = {
  jobs: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default JobListings