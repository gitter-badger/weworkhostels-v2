import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { bindActionCreators } from 'redux'

import JobListings from '../components/JobListings'
import * as addJob from '../actions/addJob'

class App extends React.Component {
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
          <Navigation />
          <JobListings jobListings={this.props.jobListings} />
        </div>
      )
    } else {
      return (
        <div>
          <Navigation />
          {this.renderChildren()}
        </div>
      )
    }
  }
}



function mapStateToProps (state) {
  return {
    jobListings: state.jobListings
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