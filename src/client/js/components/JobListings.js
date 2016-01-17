import React, { Component, PropTypes } from 'react'

class JobListings extends Component {
  render() {
    const { jobs } = this.props
    const { actions } = this.props
    const list = this.props.jobs.list.map((jobObject, index) =>
      <JobListItem key={index} 
                   index={index} 
                   date={jobObject.createDate} 
                   title={jobObject.title} 
                   name={jobObject.name}/>
    )

    return (
      <div>
        <h1>Job Listings</h1>
        {list}
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
    return (
      <li>
        {this.getDate(this.props.date)} | {this.props.title} at {this.props.name}
      </li>
    )
  }
}



JobListings.propTypes = {
  jobs: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default JobListings