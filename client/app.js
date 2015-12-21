import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Provider} from 'react-redux'

import AppContainer from './containers/App'

import About from './components/About'
import PostaJob from './components/PostaJob'

import configureStore from './store/configureStore'

import { ReduxRouter } from 'redux-router'
import { Route } from 'react-router'

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={AppContainer}>
        <Route path="about" component={About} />
        <Route path="post" component={PostaJob} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById('app')
)
