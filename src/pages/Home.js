import React, { useState } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  const [value, setValue] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <Layout>
      <p>
        <b>{value}</b>만큼 사랑해!
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      
      <button onClick={() => setIsModalActive(!isModalActive)}>
        modal btn
      </button>
    </Layout>
  );
};

export default Home;