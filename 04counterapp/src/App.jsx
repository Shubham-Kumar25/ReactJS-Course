import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>React Counter App</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default App;
