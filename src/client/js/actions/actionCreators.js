export let addJob = (jobData) => {
  return {
    type: 'ADD_JOB',
    job: jobData
  }
}

export let addPreviewJob = (jobData) => {
  return {
    type: 'ADD_PREVIEWJOB',
    job: jobData
  }
}

export let addMatchedJobs = (jobData) => {
  return {
    type: 'ADD_MATCHEDJOBS',
    job: jobData
  }
}

export let clearMatchedJobs = () => {
  return {
    type: 'CLEAR_MATCHEDJOBS',
  }
}
