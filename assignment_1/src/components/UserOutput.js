import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  const style = {
    color: "green",
  };
  return (
    <div style={style} className='user-output'>
      <h2>My name is: {props.userName}</h2>
      <p>This is paragraph 1.</p>
      <p>This is paragraph 2.</p>
    </div>
  );
};

export default UserOutput;
