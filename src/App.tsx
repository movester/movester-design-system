import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CheckBox from "./lib/CheckBox";

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className="App">
      <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}></CheckBox>
    </div>
  );
}

export default App;
