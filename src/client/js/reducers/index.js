import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import jobsReducer from './jobs.js'
import searchReducer from './search.js'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  searchJobs: searchReducer,
  router: routerStateReducer // A reducer that keeps track of Router State
})

export default rootReducer
