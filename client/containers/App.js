import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { bindActionCreators } from 'redux'
import addJob from '../actions/addJob'

class App extends React.Component {
  renderChildren () {
    return React.Children.map(this.props.children, function(child){
      return React.cloneElement(child, {jobListings: this.props.jobListings, onAddClick: this.props.onAddClick})
      }.bind(this)
    )
  }
  render () {
    return (
      <div>
        <Navigation />
        {this.renderChildren()}
      </div>
    )
  }
}



function mapStateToProps (state) {
  return {
    jobListings: state.jobListings
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onAddClick: bindActionCreators(addJob, dispatch)
  }
}

let AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer