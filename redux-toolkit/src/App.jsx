import React, { useState } from 'react'
import Counter from './features/counter/Counter';

const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button> */}

      <Counter />
    </>
  )
}

export default App