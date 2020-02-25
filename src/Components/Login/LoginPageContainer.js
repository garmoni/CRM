import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import "./LoginPage.css";
import { connect } from 'react-redux';
import LoginPageLayout from './LoginPageComponent';
import {actions} from '../../Store/Actions'
import {getAuthError,getAuthStatus,isAuthPending} from '../../Store/Reducers/userLogin.reducer'
const mapStateToProps = state => ({
  authDone: getAuthStatus(state),
  authPending: isAuthPending(state),
  authError: getAuthError(state)
});


class LoginPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { dispatch} = this.props;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }
    dispatch(actions.userLoginSend(email,password));
  };


  render() {
    const {authPending,authError,authDone} = this.props;
   
    if (authDone) {       
       return (<Redirect to="/dashboard" />);
    }

    return (
      <LoginPageLayout
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        authPending={authPending}
        authError={authError}
      />
    );
  }
}

export default withRouter(connect(mapStateToProps)(LoginPageComponent));
