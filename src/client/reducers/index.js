import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router'
import jobsReducer from './jobs.js'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  router: routerStateReducer // A reducer that keeps track of Router State
})

export default rootReducer