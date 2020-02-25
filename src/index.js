import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./Store/Store";
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: { main: blueGrey[800] }, // Purple and green play nicely together.
    secondary: { main: red[800] } // This is just green.A700 as hex.
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
