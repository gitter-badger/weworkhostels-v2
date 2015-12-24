import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router'

let initialState = [
  {"id": 1, "title": "Manager"},
  {"id": 2, "title": "Astronaut"},
  {"id": 3, "title": "Security Guard"}
]


function jobListings (state = initialState, action) {
  switch (action.type) {
    case 'ADD_JOB':
      return [...state, action.job]
    default:
      return state
  }
}

// combineReducers turns an object whos values are different reducing functions into
// a single reducing function you can pass to 'createStore'
// state field name : reducers to be called to update corresponding state fields
const reducer = combineReducers({
  jobListings: jobListings,
  router: routerStateReducer // A reducer that keeps track of Router State
})

export default reducer