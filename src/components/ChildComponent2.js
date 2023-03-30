import React from "react";

function ChildComponent2(props) {
  return (
    <div class="child2">
      <h2>Child Component 2</h2>
      <button onClick={() => props.handleButtonClick("Option 2")}>
        Option 2
      </button>
    </div>
  );
}

export default ChildComponent2;
