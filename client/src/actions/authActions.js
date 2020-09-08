import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_CURRENT_USER
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  console.log("register user api");
  axios
    .post("/api/signup", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/login", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getUserData = (cb) => dispatch => {
  let userData = {}
  axios
    .get("/api/getAllUserData")
    .then(res => {
      console.log(res.data);

      // localStorage.getItem("jwtToken");
      dispatch(getCurrentUser())
      // let allUsers = localStorage.getItem("jwtToken");
      // console.log(allUsers, "Printing out all users...");
      // // Decode token to get user data
      // const decoded = jwt_decode(token);
      // cb(res.data, "Call back");
      return userData = res.data
    },
    // getting call back to return
    // results from our .then promise.
    cb = (userData, error) => {
        console.log("toasters")
      }
    )

    // .then(res => {
    //   res.json("A okayy")
    // })
    .catch(err => {
      if (err) throw err;
      // dispatch({
      //   type: GET_ERRORS
      // })
    })
  }

export const getThisUserData = () => {
  axios
    .get("/api/getThisUserData")
    .then(res => {
      console.log(res);

      // localStorage.getItem("jwtToken");

      let allUsers = localStorage.getItem("jwtToken");
      console.log(allUsers, "Printing out all users...");
      // // Decode token to get user data
      // const decoded = jwt_decode(token);
    })
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Get logged in user
export const getCurrentUser = () => {
  return {
    type: GET_CURRENT_USER
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};