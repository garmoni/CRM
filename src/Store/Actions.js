import {service as userservice} from '../Services/UserLogin.service' 
import {service as fetchservice} from '../Services/fetchData.service'
export const USER_LOGIN_SEND = "USER_LOGIN_SEND";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGIN_SUCCESS  = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = "USER_LOGOUT";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_REQUIRED = "FETCH_DATA_REQUIRED";

export const EMPLOYEES_TOGGLE_VIEW_MODE = "EMPLOYEES_TOGGLE_VIEW_MODE";



export const actions = {
    userLoginSend,
    userLoginSuccess,
    userLoginError,
    userLogout,
    userAuth,
    fetchData,
    fetchDataPending,
    fetchDataError,
    fetchDataSuccess,
    fetchDataRequired,
    employeesToggleViewMode
}

function userLoginSend(email,password) {
    
    return (dispatch) => 
    {
        dispatch(userLoginProcess());
        dispatch(userservice.userLogin(email,password));
    };

}

function userLoginSuccess(authData) {
    return {
        type: USER_LOGIN_SUCCESS,
        authData: authData
    }
}

function userLoginError(error) {
    return {
        type: USER_LOGIN_FAILED,
        authErrorMsg: error
    }
}

function userLoginProcess() {
    return {
        type: USER_LOGIN_SEND
    }
}
function userLogout() {
    return (dispatch) => 
    {
        dispatch(userservice.userLogout());
    }  
}

function userAuth() {
    return (dispatch) => 
    {
        dispatch(userservice.userAuth());
    }  
}
function fetchData(url){
    return (dispatch) => {
     dispatch(fetchservice.fetchData(url));
    };
}

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data: data
  };
}

function fetchDataError(error) {


  return {
    type: FETCH_DATA_FAILED,
    data: error
  };
}

function fetchDataPending() {
    return {
    type: FETCH_DATA_PENDING
  };
}

function fetchDataRequired() {
    return {
    type: FETCH_DATA_REQUIRED
  };
}

function employeesSetViewMode() {
    return {       
        type: EMPLOYEES_TOGGLE_VIEW_MODE
    }
}

function employeesToggleViewMode(viewMode) {
    return dispatch => {
        dispatch(employeesSetViewMode());
        dispatch(fetchDataRequired());
    }
}
