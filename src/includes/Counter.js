import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <button onClick={decrease}>-</button>
      <input type="text" value={count} readOnly />
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
