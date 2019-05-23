// src/js/reducers/index.js

function rootReducer(state, action) {
  console.log("Received data:"+action.payload)
  return state;
}
export default rootReducer; 