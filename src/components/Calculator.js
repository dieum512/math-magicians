import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculs = () => {
  const [result, updateResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    updateResult(calculate(result, event.target.textContent));
  };

  return (
    <div className='calculator'>
      <div>
        <h2>Let's do some math!</h2>
      </div>
      <div className="calculator-container">
        <form className="calculs">
          <input className="calculs" type="text" value={result.total || result.next || '0'} readOnly />
        </form>
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculs;
