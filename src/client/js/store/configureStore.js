import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index.js'

import { createHistory } from 'history'
import { reduxReactRouter } from 'redux-router'

// Store
const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(rootReducer)

export default function configureStore () {
  return store
}
