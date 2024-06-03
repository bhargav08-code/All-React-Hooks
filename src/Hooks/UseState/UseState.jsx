import React, { useState } from "react";

function UseState() {
  // Declare a state variable named "count", initialized to 0
  const [count, setCount] = useState(0);
  const [ans, setAns] = useState("");
  const [change, setChange] = useState({
    name: "John Doe",
    age: 20,
    email: "doe@gmail.com",
  });
  function showAns() {
    setAns("HTML stands for Hyper Text Markup Language");
  }

  function onChnage() {
    setChange({
      name: "Arthur",
      age: 25,
      email: "arthur@gmail.com",
    });
  }

  return (
    <div className="title">
      <h1>The UseState() Hook</h1>
      <p>You clicked {count} times</p>
      {/* When the button is clicked, update the count state */}
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div>
        <h2>What is HTML full form?</h2>
        <h3>{ans}</h3>
        <button onClick={showAns}>Show Answer</button>
        <div>
          <h2>
            Change Name:-{change.name} age:-{change.age} email:-{change.email}{" "}
          </h2>
          <button onClick={onChnage}>Click to Change</button>
        </div>
      </div>
    </div>
  );
}

export default UseState;
