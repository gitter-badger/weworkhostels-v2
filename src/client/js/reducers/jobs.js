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
      var updatedList = state.list.concat([action.job])
      return { ...state, list: updatedList }
    default:
      return state
  }
}

export default jobsReducer
