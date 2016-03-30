const initialState = {
  list: [
    // { name: "NASA Astronaut Corps",
    //   title: "Pilot",
    //   description: "Fly to mars",
    //   city: "Houston",
    //   country: "United States",
    //   email: "NASA@gmail.com  ",
    //   website: "nasa.gov",
    //   how: "Pigeon post application",
    //   createDate: "01-07-25",
    //   sponsored: "NASA" }
  ]
}

let jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      var updatedList = [...state.list, action.job]
      return { ...state, list: updatedList, originalList: updatedList } // create a state with the existing state
    case 'UPDATE_LIST':
      return { ...state, list: action.newList }
    case 'ADD_PREVIEWJOB':
      return { ...state, previewJob: action.job }
    default:
      return state
  }
}

export default jobsReducer
