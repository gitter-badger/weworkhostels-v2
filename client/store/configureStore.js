import { createStore, compose } from 'redux'
import jobListingsReducer from '../reducers/jobListingsReducer'

import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';

// Store
const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(jobListingsReducer)

export default function configureStore () {
  return store
}