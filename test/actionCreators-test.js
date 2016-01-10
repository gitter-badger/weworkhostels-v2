import test from 'tape'
import * as actions from '../src/client/actions/addJob'

test('addJob action creator should create an action to add a job', function(assert) {
  const jobData = { title: 'Manager' }
  const actual = actions.addJob(jobData)
  const expectedAction = {
    type: 'ADD_JOB',
    job: jobData
  }

  assert.deepEqual(actual, expectedAction)
  assert.end()
})