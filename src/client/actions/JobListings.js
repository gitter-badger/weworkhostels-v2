let jobs = [
  {"id": 1, "title": "Manager"},
  {"id": 2, "title": "Astronaut"},
  {"id": 3, "title": "Security Guard"}
]


const displayJob = {
  type: 'display',
  title: jobs.map(jobObject => jobObject.title)
}

export default displayJob
