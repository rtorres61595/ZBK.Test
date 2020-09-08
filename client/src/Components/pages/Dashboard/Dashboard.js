import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getUserData } from "../../../actions/authActions";

import Cards from '../../Cards'
import Footer from '../../Footer';
import WelcomeBack from '../../WelcomeBack';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      errors: {}
    };
  }

  componentDidMount() {

  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  buttonToGetUserData = e => {
    e.preventDefault();
    let response = {};
    // action that gets all users data.
    this.props.getUserData(function (err, response){
      if (err) throw err;
      console.log(response);
      return response;
    });
    // const displayingUserData = {
    //   userData: this.props.getUserData()
    // }
    console.log(response, "displaying user data definition");
  }
  render() {
    const { user } = this.props.auth;
    console.log(user);
    console.log(this.props);
    console.log(this.props.color);
    return (
        <div>
            <div className="row">
            <div className="col s12 center-align">
                <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                    You are logged into a full-stack{" "}
                    <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                </p>
                </h4>
                <button
                style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                Logout
                </button>
                <button
                style={{
                    width: "200px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                }}
                onClick={this.buttonToGetUserData}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                Add Favorites
                </button>
            </div>
            </div>
            <Cards />
        </div>
        );
    } 
}

Dashboard.propTypes = {
  getUserData: PropTypes.func,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, getUserData }
)(Dashboard);

// function Dashboard(props) {

//   return (
//     <div className="container">
//         <WelcomeBack />
//         <Cards />
//         <Footer />
//     </div>
//   );
// }
