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
