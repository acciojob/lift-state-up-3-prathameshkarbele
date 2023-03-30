import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div class="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 handleButtonClick={handleButtonClick} />
      <ChildComponent2 handleButtonClick={handleButtonClick} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default App;
