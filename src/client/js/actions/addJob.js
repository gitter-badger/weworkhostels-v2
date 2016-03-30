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

export let updateList = (newList) => {
	console.log(newList, ' da new list')
	return {
		type: 'UPDATE_LIST',
		newList: newList
	}
}