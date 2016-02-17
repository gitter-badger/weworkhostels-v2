import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index.js'

import { createHistory } from 'history'
import { reduxReactRouter } from 'redux-router'

// Store
const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(rootReducer)

let configureStore = () => {
  return store
}

export default configureStore
