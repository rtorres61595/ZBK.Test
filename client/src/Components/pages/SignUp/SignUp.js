import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import classnames from "classnames";

import "./SignUp.css"
import "../../materialize/css/materialize.css"
import { FormGroup, Input, Label, Small, FormBtn } from "../../Form"
import dbAPI from "../../../utils/dbAPI";
import API from "../../../utils/accountAPI";

class SignUp extends Component {
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
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirm: this.state.confirm
      };
    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);


  };

  render() {
    const { errors } = this.state;
    return (
          <div className="signupContainer">
            <div className="the-form">
              <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect">
                  <i className="material-icons left">keyboard_backspace</i> Back to
                  home
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h4>
                    <b>Register</b> below
                  </h4>
                  <p className="grey-text text-darken-1">
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                </div>
                <form noValidate onSubmit={this.onSubmit} >
                  <FormGroup className="form-group">
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        className={classnames("", {
                          invalid: errors.name
                        })}
                      />
                      <label text="Username" htmlFor="name">Name</label>
                      <span className="red-text">{errors.name}</span>
                      {this.state.errors ? <Small text="Name is valid" /> : <Small text="Name is invalid" />}
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email
                        })}
                      />
                      <label text="Email" htmlFor="email">Email</label>
                      <span className="red-text">{errors.email}</span>
                      {this.state.errors ? <Small text="Email is valid" /> : <Small text="Email is invalid" />}
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                    <label text="Password" htmlFor="password">Password</label>
                    <span className="red-text">{errors.password}</span>
                    {this.state.validPW ? <Small text="Password is valid" /> : <Small text="Password must be at least 8 characters" />}
                  </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.confirm}
                      error={errors.confirm}
                      id="confirm"
                      type="password"
                      className={classnames("", {
                        invalid: errors.confirm
                      })}
                    />
                    <label text="Confirm Password" htmlFor="confirm">Confirm Password</label>
                    <span className="red-text">{errors.confirm}</span>
                    {this.state.validPW ? <Small text="Password is valid" /> : <Small text="Password must be at least 8 characters" />}
                  </div>
                  </FormGroup>
                  {this.state.error ? <Small text={this.state.error} /> : ""}
                  <FormGroup className="form-group">
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                      <button
                        style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                      >
                        Sign up
                      </button>
                    </div>
                  </FormGroup>
                </form>
              </div>
            </div>
          </div>
    );
  }
}

// Defining propTypes
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Allows us to get our state from Redux and map it to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default  connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));







// class SignUp extends Component {
//   constructor() {
//     super() 
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       confirm: "",
//       errors: {}
//     }
//   };

//   onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const newUser = {
//           name: this.state.name,
//           email: this.state.email,
//           password: this.state.password,
//           confirm: this.state.confirm
//     };

//     console.log(newUser);
//   };

//   render() {
//     const { errors } = this.state;

//     return (

//       <div className="signupContainer">
//         <form className="the-form">
//         <h3>Sign Up</h3>
//         <FormGroup className="form-group">
//           <Label text="Username" />
//           <Input
//             name="username"
//             value={this.state.username}
//             onChange={this.handleInputChange}
//             id="name"
//             error={errors.name}
//             placeholder="at least 8 characters"
//             type="text"
//           />
//           {this.state.validUN ? <Small text="Username is available" /> : <Small text="Username is not available" />}
//           </FormGroup>
//           <FormGroup className="form-group">
//           <Label text="Email" />
//           <Input
//             name="email"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//             placeholder="Email"
//             type="email"
//           />
//           {this.state.validEM ? <Small text="Email is valid" /> : <Small text="Email is invalid" />}
//           </FormGroup>
//           <FormGroup className="form-group">
//           <Label text="Password" />
//           <Input
//             name="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             placeholder="at least 8 characters"
//             type="password"
//           />
//           {this.state.validPW ? <Small text="Password is valid" /> : <Small text="Password must be at least 8 characters" />}
//           </FormGroup>
//           <FormGroup className="form-group">
//           <Label text="Confirm Password" />
//           <Input
//             name="confirm"
//             value={this.state.confirm}
//             onChange={this.handleInputChange}
//             type="password"
//           />
//           {this.state.validCF ? <Small text="Passwords match" /> : <Small text="Passwords don't match" />}
//           </FormGroup>
//           {this.state.error ? <Small text={this.state.error} /> : ""}

//           <FormGroup className="form-group">
//             {/* <FormBtn
//               disabled={
//                 this.state.validUN && this.state.validEM && this.state.validCF
//                   ? ""
//                   : "disabled"
//               }
//               text="Submit"
//               onClick={this.signup}
//               classes=""
//             /> */}
//           <button 
//               disabled={
//                 this.state.validUN && this.state.validEM && this.state.validCF
//                   ? ""
//                   : "disabled"
//               }
//               text="Submit"
//               onClick={this.signup}>
//                 Signup today!
//             </button>
//             <br></br>
//             <Link to="/login">Already registered? Click here.</Link>
//           </FormGroup>

//         </form>
//       </div>
//     );
//   }
// }

