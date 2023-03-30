import React from "react";

function ChildComponent1(props) {
  return (
    <div class="child1">
      <h2>Child Component 1</h2>
      <button onClick={() => props.handleButtonClick("Option 1")}>
        Option 1
      </button>
    </div>
  );
}

export default ChildComponent1
