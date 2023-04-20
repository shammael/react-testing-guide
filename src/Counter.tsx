import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add One</button>
      <div role="contentinfo">Count is {counter}</div>
    </div>
  );
};

export default Counter;
