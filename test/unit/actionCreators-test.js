import test from 'tape'
import * as actions from '../../src/client/js/actions/addJob'

test('addJob action creator should return an action to add a job.',(assert) => {
  const jobData = { title: 'Manager' }
  const actual = actions.addJob(jobData)
  const expectedAction = {
    type: 'ADD_JOB',
    job: jobData
  }

  assert.plan(1)
  assert.deepEqual(actual, expectedAction)
})