import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  });
  return (
    <div className="title">
      <h1>The UseEffect() Hook</h1>
      <p>Count renderd {count} times</p>
      <p>The count rendered after every 2 seconds</p>
    </div>
  );
};
export default UseEffect;
