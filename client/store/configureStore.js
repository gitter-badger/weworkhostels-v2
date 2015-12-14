import { createStore, compose } from 'redux'
import counter from '../reducers/counter'

import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';

// Store
const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(counter)

export default function configureStore () {
  return store
}