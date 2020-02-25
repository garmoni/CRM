import {combineReducers} from 'redux'
import userLoginReducer from './userLogin.reducer'
import fetchDataReducer from "./fetchData.reducer";
import employeesReducer from './employees.reducer';

export default combineReducers({
  login:userLoginReducer,
  api:fetchDataReducer,
  employees:employeesReducer
});

