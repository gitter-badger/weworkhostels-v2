import { connect } from 'react-redux'
import Counter from '../components/Counter'
import increaseAction from '../actions/counter'

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: state.counter.count
  }
}
// Accepts Redux store's state
// Returns a plain object that will be merged into the component's props via
// connect(). Subscribes component to Redux store


// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
// If an object is passed, each function inside it should be an action creator.
// An object with the same function names, but bound to Redux store is merged to components props.
// If function passed, it will be given 'dispatch'.
// You must return an object that somehow uses dispatch to bind action creators.

// Connected Component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App