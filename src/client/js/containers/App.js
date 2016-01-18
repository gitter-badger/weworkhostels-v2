import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { bindActionCreators } from 'redux'

import JobListings from '../components/JobListings'
import * as addJob from '../actions/addJob'

import Firebase from 'firebase'

let JobListingsRef

if (env === 'production') {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')
} else {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings-dev')
}

class App extends React.Component {
  componentWillMount() {
    JobListingsRef.on('child_added', (snapshot) => {
      let job = snapshot.val()
      job['id'] = snapshot.key()
      this.props.actions.addJob(job)
    })
  }

  renderChildren () {
    return React.Children.map(this.props.children, function(child){
      return React.cloneElement(child, {actions: this.props.actions})
      }.bind(this)
    )
  }
  render () {
    if (this.props.children === null) {
      return (
        <div>
          <Header />
          <JobListings jobs={this.props.jobs} actions={this.props.actions} />
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          {this.renderChildren()}
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    jobs: state.jobs
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(addJob, dispatch)
  }
}

let AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer