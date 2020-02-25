import React, { Component } from "react";
import "./Dashboard.css";
import {actions} from "../../Store/Actions";
import { connect } from "react-redux";
import { withRouter,Redirect} from "react-router-dom";
import HeaderPanel from './HeaderPanel'
import {
  getAuthError,
  getAuthStatus,
  isAuthPending
} from "../../Store/Reducers/userLogin.reducer";
const mapStateToProps = state => ({
  authDone: getAuthStatus(state),
  authPending: isAuthPending(state),
  authError: getAuthError(state)
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
    const {value } = e.target;
    this.setState({searchData:value});
  };

  render() {
    return (
      <HeaderPanel        
        handleClickMenuElement={this.handleClickMenuElement}
        handleClickLogOut={this.handleClickLogOut}
        handleSearchSubmit={this.handleSearchSubmit}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}
export default withRouter(connect(mapStateToProps)(Dashboard));