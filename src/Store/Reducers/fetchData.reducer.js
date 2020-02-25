import {
FETCH_DATA_SUCCESS,
FETCH_DATA_FAILED,
FETCH_DATA_PENDING,
FETCH_DATA_REQUIRED
} from "../Actions";

const fetchDataState = {
  data: [],
  pending: false,
  success: false,
  error: false,
  errorMsg: undefined,
  required:true
};

export default function fetchDataReducer(state = fetchDataState, action) {
                  switch (action.type) {
                    case FETCH_DATA_REQUIRED:
                      return Object.assign({}, state, {
                        required: true,
                        data: [],
                        pending: false,
                        success: false
                      });
                    case FETCH_DATA_PENDING:
                     return Object.assign({}, state, {
                       data: [],
                       required:false,
                       pending: true,
                       success: false,
                       error: false,
                       errorMsg: undefined
                     });
                   case FETCH_DATA_SUCCESS:                       
                     return Object.assign({}, state, {
                       data: action.data,
                       required:false,
                       pending: false,
                       success: true
                     }
                     );
                  

                   case FETCH_DATA_FAILED:
                     return Object.assign({}, state, {
                       data: [],
                       pending: false,
                       success: false,
                       required:false,
                       error: true,
                       errorMsg: action.data
                     });

                   default:
                     return state;
                     
                 }
                 
               }

export const getFetchData = state => state.api.data;
export const getFetchDone = state => state.api.success;
export const getFetchError = state => ({
  err: state.api.error,
  errMsg: state.api.errorMsg
});
export const isFetchPending = state => state.api.pending;
export const isFetchRequired = state => state.api.required;

