import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import Navbar from './Components/Navbar/Navbar';
import UserNavbar from './Components/UserNavbar/UserNavbar';

import { Provider } from "react-redux";
import store from "./store";
import { registerUser, loginUser, setCurrentUser, setUserLoading, logoutUser } from "./actions/authActions";

import Home from './Components/pages/Home/Home';
import Dashboard from './Components/pages/Dashboard/Dashboard';
import PrivateDash from './Components/pages/Private/PrivateDash';
import SkateMap from './Components/pages/SkateMap/SkateMap';
import Spots from './Components/pages/Spots/Spots';
import SignUp from './Components/pages/SignUp/SignUp';
import Login from './Components/pages/Login/Login';

import './App.css';
import API from "./utils/accountAPI";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

// let onLogoutClick = PrivateDash.onLogoutClick();


class App extends Component {




  render() {
    return (
      <Provider store={store}>
        {/* // Add the Router module needed for login and send them to spots page. */}
        <Router> 

          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/skatemap" component={SkateMap} />
          <Route exact path="/spots" component={Spots} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Router>
      </Provider>
    );
  }
}

export default App;


// state = {
//   authorized: false,
//   display: false,
// };

// componentDidMount() {
//   this.isAuthorized();
// }

// isAuthorized = () => {
//   API.isAuthorized()
//     .then(res => {
//       this.setState({
//         authorized: res.data.message ? false : true,
//         display: true
//       })
//     })
//     .catch(err => {
//       console.log(err);
//       this.setState({ authorized: false, display: true});
//     });
// };

// logout = () => {
//   API.logout()
//     .then(res => {
//       console.log("Logged out.");
//       this.isAuthorized();
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// setRedirect = (pathname) => {
//   this.setState({ redirect: pathname });
// };
