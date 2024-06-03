import React from "react";
import UseState from "./Hooks/UseState/UseState";
import UseEffect from "./Hooks/UseEffect/UseEffect";
import Useref from "./Hooks/UseRef/Useref";

const App = () => {
  return (
    <div className="app">
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <Useref />
    </div>
  );
};

export default App;
