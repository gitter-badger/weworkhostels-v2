export let addJob = (jobData) => {
  return {
    type: 'ADD_JOB',
    job: jobData
  }
}
