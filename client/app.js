import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider} from 'react-redux'

import App from './containers/App'
import counter from './reducers/counter'

// Store
let store = createStore(counter)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)