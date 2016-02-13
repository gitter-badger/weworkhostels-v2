import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class JobListings extends Component {
  render() {
    const { jobs } = this.props
    const { actions } = this.props
    const list = this.props.jobs.list.map((jobObject, index) =>
      <JobListItem key={index}
                   index={index}
                   date={jobObject.createDate}
                   title={jobObject.title}
                   name={jobObject.name}
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
          {this.getDate(this.props.date)} | {this.props.title} at {this.props.name}
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