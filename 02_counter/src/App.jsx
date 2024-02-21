import { useState } from 'react';
import './App.css';


const App = () => {

  const [counter, setCounter] = useState(10);

  const handleAddValue = () => {
    setCounter((counter) => {
      return counter + 1;
    });
  };

  const handleRemoveValue = () => {
    setCounter((counter) => {
      if (counter < 0) {
        return;
      } else {
        return counter - 1;
      }
    });
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={handleAddValue}>Add Value</button>
      <br />
      <button onClick={handleRemoveValue}>Remove Value</button>
    </>
  )
}

export default App;
