import React, { useState, useEffect, useCallback, } from 'react';
import './app.css';

function App() {
  const [array, setArray] = useState([1, 2, 3, 4]);
  const [rotation, setRotation] = useState(false);
  const increment = useCallback(() => {
    const x = 1 + (10 / array.reduce((preV, currV, currI) => preV + currV, 0));
    setArray([array[0]*x, array[1]*x, array[2]*x, array[3]*x]);
  }, [array]);

  useEffect(() => {
    if(!rotation) return;
    const timer = setInterval(() => setArray(cv => [cv[1], cv[2], cv[3], cv[0],]), 500);
    return () => clearInterval(timer);
  }, [rotation]);

  return (
    <div className='main'>
      <div className='row-component text'>
        [{array.join(", ")}]
      </div>
      
      <div className='row-component'>
        <button className='action-button' onClick={increment}>Increment</button>
      </div>

      <div className='row-component'>
        <button className='action-button' onClick={(evt) => setRotation(!rotation)}>{!rotation? "Enable" : "Disabled"} rotation</button>
      </div>
    </div>
  );
}

export default App;
