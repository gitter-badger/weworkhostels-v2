import test from 'tape'
import jobsReducer from '../src/client/reducers/jobs'

test('jobs reducer', function(assert) {
  const actualReducer = jobsReducer
  const initialState = {
    list: []
  }
  const initialState2 = {
    list: [ { title: 'Actress' } ]
  }
  const action = {
    type: 'ADD_JOB',
    job: {
      title: 'Web developer'
    }
  }

  assert.deepEqual(actualReducer(undefined, {}), { list: [] }, 'It should return the initial state if state is not provided.')

  assert.deepEqual(actualReducer(initialState, action),
  {
    list: [ { title: 'Web developer' } ]
  }
  , 'It should handle ADD_JOB')

  assert.deepEqual(actualReducer(initialState2, action),
  {
    list: [ { title: 'Actress'}, { title: 'Web developer' }]
  }, 'It should return the new state after applying the action to the previous state')

  assert.deepEqual(initialState, { list: [] }, 'It should not mutate the initial state')

  assert.deepEqual(action, {
    type: 'ADD_JOB',
    job: {
      title: 'Web developer'
    }
  }, 'It should not mutate the action')

  assert.end()
})
