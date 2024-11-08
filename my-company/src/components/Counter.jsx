// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // Step 2: Initialize the count state with useState
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Step 4: Display the Current Count */}
      <p>Current Count: {count}</p>

      {/* Step 3: Create Buttons for Counter Actions */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
