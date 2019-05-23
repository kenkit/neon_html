// src/js/reducers/index.js
import store from '../store/store'
import MODEL from '../model/model'
import { parse } from '@babel/parser';

function rootReducer(state, action) {
  console.log("Received data:" + action.payload);
  if(action.type==="KK"){
  var data_received = JSON.parse(action.payload);
  /*  MODEL.setState({
      name: data_received.name, type: data_received.type
    });*/
  }
  return state;
}
export default rootReducer; 