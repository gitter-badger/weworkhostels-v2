import { increaseAction } from '../actions/counter'
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router'
// Tip: Name reducers after the state key they manage.
// Reducer
function counter (state = {count: 0}, action) {
  let count = state.count
  switch (action.type) {
    case 'increase':
      return {count: count + 1}
    default:
      return state
  }
}

// combineReducers turns an object whos values are different reducing functions into
// a single reducing function you can pass to 'createStore'
// state field name : reducers to be called to update corresponding state fields
const reducer = combineReducers({
  counter: counter,
  router: routerStateReducer // A reducer that keeps track of Router State
})

export default reducer