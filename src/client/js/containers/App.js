import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { bindActionCreators } from 'redux'

import SearchBar from '../components/SearchBar'

import JobListings from '../components/JobListings'
import * as actionCreators from '../actions/actionCreators'
import Firebase from 'firebase'

import scss from '../../scss/main.scss'

let JobListingsRef

if (env === 'production') {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings')
} else {
  JobListingsRef = new Firebase('https://weworkhostels-v2.firebaseio.com/job-listings-dev')
}

class App extends Component {
  componentWillMount () {
    JobListingsRef.on('child_added', (snapshot) => {
      let job = snapshot.val()
      job['id'] = snapshot.key()
      this.props.actions.addJob(job)
    })
  }

  searchJobs (keyword) {
    JobListingsRef.orderByChild('country').equalTo(keyword).on('value', (snapshot) => {

      if (snapshot.val() !== null && typeof snapshot.val() === 'object') {
        for (var key in snapshot.val()) {
          let job = snapshot.val()[key]
          job['id'] = key
          this.props.actions.addMatchedJobs(job)
        }
      }
    })
  }

  renderChildren () {
    // creating new child elements with the new props merged with the original element's props.
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {actions: this.props.actions, jobs: this.props.jobs})
    })
  }
  render () {
    if (this.props.children === null) {
      return (
        <div>
          <Header />
          <SearchBar searchJobs={this.searchJobs.bind(this)} actions={this.props.actions} />
          <JobListings jobs={this.props.jobs} actions={this.props.actions} searchJobs={this.props.searchJobs}/>
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

let mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    searchJobs: state.searchJobs
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

let AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
