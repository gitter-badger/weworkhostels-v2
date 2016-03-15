const initialState = {
  list: [
  ],
  isSearching: false
}

let searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MATCHEDJOBS':
      var updatedList = [...state.list, action.job]
      return {...state, list: updatedList, isSearching: true}
    case 'CLEAR_MATCHEDJOBS':
      return {list: initialState, isSearching: false}
    default:
      return state
  }
}

export default searchReducer