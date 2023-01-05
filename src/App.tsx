import { useState } from 'react'

interface props {
  counter: number
}

function App(props: props) {
  const { counter } = props;
  const [count, setCount] = useState(counter);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function restart() {
    setCount(0);
  }

  function swit() {
    setCount(count * (-1));
  }

  return (
    <div className="App">
      <p data-testid="count">{count}</p>

      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => restart()}>restart</button>
      <button onClick={() => swit()}>switch</button>

    </div>
  )
}

export default App; 
