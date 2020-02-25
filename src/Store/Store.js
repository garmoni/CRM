import {applyMiddleware,  createStore } from "redux"
import thunk from 'redux-thunk'
import combineReducer from "./Reducers/index"
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middlewares = [thunk, logger];
const store = createStore(combineReducer,  applyMiddleware(...middlewares));
export default store;
