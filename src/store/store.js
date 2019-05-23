import {createStore, applyMiddleware} from 'redux';
import reduxWebsocket from 'react-redux-websocket';
import rootReducer from '../reducer/reducer'

const socket = new WebSocket('ws://localhost:9999');
const store = createStore(rootReducer, applyMiddleware(reduxWebsocket(socket)));
export default store;