import React, { Component } from "react";
import "./Dashboard.css";
import { actions } from "../../Store/Actions";
import { connect } from "react-redux";
import { withRouter, Redirect, Route} from "react-router-dom";
import HeaderPanel from './Parts/HeaderPanel'
import EmployeesContainer from "./Employees/EmployeesContainer";


import {
  getAuthError,
  getAuthStatus,
  isAuthPending,
  getAuthData
} from "../../Store/Reducers/userLogin.reducer";
const mapStateToProps = state => ({
  authDone: getAuthStatus(state),
  authPending: isAuthPending(state),
  authError: getAuthError(state),
  authData: getAuthData(state)
});



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: ""
    };

    this.handleClickMenuElement = this.handleClickMenuElement.bind(this);
    this.handleClickLogOut = this.handleClickLogOut.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

  }

  handleClickMenuElement = e => {
    e.preventDefault();
  };

  //logout from application and remove all user data
  handleClickLogOut = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(actions.userLogout());
  };

  //start search
  handleSearchSubmit = e => {
    e.preventDefault();
  };

  //while entering search text we can do smart search
  handleSearchChange = e => {
    const { value } = e.target;
    this.setState({ searchData: value });
  };

  render() {

    const { authDone, authData, dispatch } = this.props;
    if (!authDone) {
      dispatch(actions.userAuth());
      return <Redirect to="/login" />;
    }    
    else
      return (
        <div>
          <HeaderPanel 
            handleClickMenuElement={this.handleClickMenuElement}
            handleClickLogOut={this.handleClickLogOut}
            handleSearchSubmit={this.handleSearchSubmit}
            handleSearchChange={this.handleSearchChange}
            userName={`${authData.last_name} ${authData.first_name}`}
          />
          <Route path="/dashboard/employees" component={EmployeesContainer} />
        </div>
      );

  }
}
export default withRouter(connect(mapStateToProps)(Dashboard));