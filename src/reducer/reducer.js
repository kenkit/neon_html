// src/js/reducers/index.js
const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {
    console.log(state);
  return state;
};
export default rootReducer;