import React from "react";

const Input = ({ type, name, placeholder }) => (
  <div className="signup-form-div">
    <input
      type={type}
      name={name}
      className="signup-form-div-input"
      placeholder={placeholder}
    />
  </div>
);

export default Input;
