import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "../Dashboard/Dashboard";
import UserNavbar from "../../UserNavbar/UserNavbar";

const PrivateDash = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <>
        <UserNavbar {...props} />
        <Dashboard {...props} />
        </>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
PrivateDash.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(PrivateDash);