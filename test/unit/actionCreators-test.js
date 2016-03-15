import test from 'tape'
import * as actionCreators from '../../src/client/js/actions/actionCreators'

test('The action creator should return an action to add a job.', (assert) => {
  const jobData = { title: 'Manager' }
  const actual = actionCreators.addJob(jobData)
  const expectedAction = {
    type: 'ADD_JOB',
    job: jobData
  }

  assert.plan(1)
  assert.deepEqual(actual, expectedAction)
})
