import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [userName, setUserName] = useState("Mona");

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className='App'>
      <h1>Hello</h1>
      <UserInput onChange={handleInputChange} userName={userName} />
      <UserOutput userName={userName} />
      <UserOutput userName={userName} />
    </div>
  );
}

export default App;
