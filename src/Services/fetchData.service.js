import { actions} from "../Store/Actions";

export const service = {fetchData};
const baseAPIUrl = "http://crm.varius.local:8888/";
function fetchData(apiUrl) {    
  const authData = localStorage.getItem("authData");
  let accessToken = undefined
    try {
        accessToken = JSON.parse(authData).access;
    } catch(error) 
    {
        return dispatch=>{dispatch(actions.userLogout)};
    }


  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json","Authorization": "Bearer "+accessToken }
  };
  return dispatch => {
    dispatch(actions.fetchDataPending());
    fetch(baseAPIUrl + apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {          
          if (response.status===401){            
            dispatch(actions.userLogout());
          }
          
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        dispatch(actions.fetchDataSuccess(data));
      })
      .catch(error =>
        dispatch(actions.fetchDataError(error.message))
      );
  };
}
