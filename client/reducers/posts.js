// a reducer takes in 2 things:
  // action
  // copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we're updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the one we're updating
      ]
    // return the updated state
    default:
      return state;
  }
  return state;
}

export default posts;
