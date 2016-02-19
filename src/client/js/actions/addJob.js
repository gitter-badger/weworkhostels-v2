export let addJob = (jobData) => {
  return {
    type: 'ADD_JOB',
    job: jobData
  }
}

export let addNewJob = (jobData) => {
  return {
    type: 'ADD_NEWJOB',
    job: jobData
  }
}
