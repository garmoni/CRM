import {
        EMPLOYEES_TOGGLE_VIEW_MODE
    } from "../Actions";
    
    const employeesState = {
      viewMode: false
    };
    
    export default function employeesReducer(state = employeesState, action) {
                      switch (action.type) {
                       case EMPLOYEES_TOGGLE_VIEW_MODE:
                         return Object.assign({}, state, {
                           viewMode: !state.viewMode
                         });

                       default:
                         return state;
                     }
                   }
    
    export const getViewMode = state => state.employees.viewMode;   
    