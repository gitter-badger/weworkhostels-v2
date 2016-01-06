const initialState = {
  list: [{"id": 1, "title": "Manager"},
         {"id": 2, "title": "Astronaut"},
         {"id": 3, "title": "Security Guard"}]
}

function jobsReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_JOB':
      var updatedList = state.list.concat([action.job])
      return { ...state, list: updatedList }
    default:
      return state
  }
}

export default jobsReducer