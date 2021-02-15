import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div className='user-input'>
      <label>Enter your name: </label>
      <input type='text' onChange={props.onChange} value={props.userName} />
    </div>
  );
};

export default UserInput;
