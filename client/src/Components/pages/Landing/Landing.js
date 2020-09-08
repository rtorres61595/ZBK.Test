import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../../HeroSection";
import Cards from "../../Cards";

class Landing extends Component {

  render() {
    console.log(this.props.displayFavorite);
    return (
      <div>
        <h1> Hi, {this.props.displayFavorite}</h1>
        <HeroSection />
        <Cards />
      </div>
    );
  }
}
export default Landing;