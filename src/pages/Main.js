import React, { useState } from 'react';

const Main = () => {
  const [value, setValue] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div>
      <p>
        <b>{value}</b>만큼 사랑해!
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      
      <button onClick={() => setIsModalActive(!isModalActive)}>
        modal btn
      </button>
    </div>
  );
};

export default Main;