import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import { Route } from 'react-router'
import AppContainer from './containers/App'
import About from './components/About'
import Post from './components/Post'
import Preview from './components/Preview'
import Job from './components/Job'
import configureStore from './store/configureStore'

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path='/' component={AppContainer}>
        <Route path='about' component={About} />
        <Route path='post' component={Post} />
          <Route path='post/preview' component={Preview} />
        <Route path='job/:jobID' component={Job} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById('app')
)
