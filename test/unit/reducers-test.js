import test from 'tape'
import jobsReducer from '../../src/client/js/reducers/jobs'

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

test('jobsReducer should handle ADD_JOB', (assert) => {
  const newState = {
    list: [ { title: 'Web developer' } ]
  }

  assert.plan(1)
  assert.deepEqual(actualReducer(initialState, action), newState)
})

test('jobsReducer should return the initial state if state is not provided.', (assert) => {
  assert.plan(1)
  assert.deepEqual(actualReducer(undefined, {}), { list: [] })
})

test('jobsReducer should return the new state after applying the action to the previous state.', (assert) => {
  const newState = {
    list: [ { title: 'Actress'}, { title: 'Web developer' }]
  }

  assert.plan(1)
  assert.deepEqual(actualReducer(initialState2, action), newState)
})

test('jobsReducer should not mutate the initial state.', (assert) => {
  assert.plan(1)
  assert.deepEqual(initialState, { list: [] })
})

test('jobsReducer should not mutate the action', (assert) => {
  const newState = {
    type: 'ADD_JOB',
    job: {
      title: 'Web developer'
    }
  }

  assert.plan(1)
  assert.deepEqual(action, newState)
})
