import React from "react";

const Validation = (props) => {
  return (
    <div>
      <p>{props.value.length > 5 ? "Text long enough" : "Text too short"}</p>
    </div>
  );
};

export default Validation;
