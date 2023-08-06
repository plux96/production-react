import React, { useState } from "react";
import "./Counter.scss";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h3>{count}</h3>
    </div>
  );
}
