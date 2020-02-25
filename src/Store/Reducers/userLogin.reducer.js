import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGIN_SEND, USER_LOGOUT } from "../Actions"

const initialState = {   
        authData:[],        
        authInit:false,
        authSuccess:false,
        authError:false,   
        authErrorMsg:undefined
 };
 
 export default function userLoginReducer(state = initialState, action) {
     switch (action.type) {
       case USER_LOGIN_SEND:
         return Object.assign({}, state, {
           authData: [],
           authInit: true,
           authSuccess: false,
           authError: false,
           authErrorMsg: undefined
         });
       case USER_LOGIN_SUCCESS:
         return Object.assign({}, state, {
           authData: action.authData,
           authInit: false,
           authSuccess: true
         });
       case USER_LOGOUT:
         return Object.assign({}, state, {
           authInit: false,
           authError: false,
           authErrorMsg: undefined,
           authData: [],
           authSuccess: false
         });
       case USER_LOGIN_FAILED:
         return Object.assign({}, state, {
           authInit: false,
           authError: true,
           authErrorMsg: action.authErrorMsg
         });

       default:
         return state;
     }
 }
 
 
 export const getAuthStatus = state => state.login.authSuccess;
 export const getAuthError = state => ({err:state.login.authError,errMsg:state.login.authErrorMsg});
 export const isAuthPending = state => state.login.authInit;
 export const getAuthData = state => state.login.authData;
 


