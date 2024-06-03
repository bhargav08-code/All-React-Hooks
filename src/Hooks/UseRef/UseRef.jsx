import React, { useEffect, useRef, useState } from "react";

function UseEffect() {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <h1>UseRef() Hook</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>

      <h1>Value has renderd {count.current} times</h1>
    </div>
  );
}
export default UseEffect;
