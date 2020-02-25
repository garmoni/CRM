import {actions,USER_LOGOUT} from '../Store/Actions';

export const service={userLogin,userLogout, userAuth};

 function  userLogin(email,password) {

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      };
     return (dispatch)=>{
        fetch("http://crm.varius.local:8888/users/auth/", requestOptions)
          .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(data => {
            localStorage.setItem("authData",JSON.stringify(data));
            dispatch(actions.userLoginSuccess(data));            
          })
          .catch((error) => dispatch(actions.userLoginError("Ошибка подключения: "+error.message)));

    };
};

function userLogout(){
  localStorage.removeItem("authData");  
  return {
    type: USER_LOGOUT
  }
}

function userAuth(){
  return (dispatch)=>{
    let authData = JSON.parse(localStorage.getItem("authData"));  
    if (authData) dispatch(actions.userLoginSuccess(authData))
    else return {
      type: USER_LOGOUT
    }
  }
}