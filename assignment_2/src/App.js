import React, { useState } from "react";
import "./App.css";
import Char from "./components/assignment-two/Char";
import ValidationComponent from "./components/assignment-two/Validation";

function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleDeleteChar = (index) => {
    const text = value.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setValue(updatedText);
  };

  const charList = value.split("").map((char, index) => {
    return (
      <Char
        character={char}
        key={index}
        onClick={() => handleDeleteChar(index)}
      />
    );
  });

  return (
    <div className='App'>
      <h1>Assignment 2</h1>
      <hr />
      <input type='text' onChange={handleInputChange} value={value} />
      <p>{value}</p>

      <ValidationComponent value={value} />
      {charList}
    </div>
  );
}

export default App;
