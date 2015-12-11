import { createStore, applyMiddleware, compose } from 'redux'
import counter from '../reducers/counter'

// Store
const store = createStore(counter)

export default function configureStore () {
  return store
}