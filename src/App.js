import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router,  Route, withRouter } from "react-router-dom";
import LoginPageComponent from "./Components/Login/LoginPageContainer"
import Dashboard from "./Components/Dashboard/DashboardPageContainer"



class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <LoginPageComponent />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        
      </Router>
    );
  }
}

export default withRouter(App);



