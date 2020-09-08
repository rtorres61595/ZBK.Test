import React from "react";
import './style.css';
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="hidden" {...props} />
    </div>
  );
}

export function Small({ text, classes }) {
  return <small className={classes}> {text} </small>;
}

export function Label({ text }) {
  return <label> {text} </label>;
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormGroup({ children }) {
  return <div className="form-group"> {children} </div>;
}

export function FormBtn(props) {
  return (
    <button {...props} className="signupButton">
      {props.children}
    </button>
  );
}

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="">
//       {props.children}
//     </button>
//   );
// }