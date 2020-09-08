import React, { Component } from 'react';
import { logoutUser } from "../../../actions/authActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";
// import '../../../App.css';
import Landing from '../Landing/Landing';
import HeroSection from '../../HeroSection';
import Footer from '../../Footer';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteSpot: ""
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  hasFavoriteSpot = (user) => {
    // e.preventDefault();
    this.state = {
      favoriteSpot: false
    }
    
    console.log("the component did mount");
    console.log(user);
    if (user.length) {
      console.log("there is auth");
      this.setState({favoriteSpot: true})
    } else {
      console.log("there is no auth")
      this.setState({favoriteSpot: false})
    }
    console.log(this.state.favoriteSpot);
    return this.state.favoriteSpot;
  }

  componentDidMount() {
    const { user } = this.props.auth;

    // If logged in and user hasnt selected a favorite spot then we display a button to do so,
    // If logged in and user has selected a favorite spot then we display favorite spot weather data.
    this.userSettings = this.hasFavoriteSpot(user);
    console.log(this.userSettings);
  }

  //   if (this.props.auth) {
  //     console.log("there is auth");
  //     if (user.length) {
  //       hasFavoriteSpot = <h1>Hello yo...</h1>
  //     } else {
  //       hasFavoriteSpot = <h1>Not hello yo...</h1>
  //     }
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard"); // push user to dashboard when they login
  //   }
  // }

  render() {

    console.log(this.state.favoriteSpot);
    return (
      <div className="container">
        {/* {this.displayFavorite} */}
        <Landing />
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);
