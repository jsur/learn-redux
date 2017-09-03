// a reducer takes in 2 things:
  // action
  // copy of current state
  
function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;