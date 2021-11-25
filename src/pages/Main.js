import React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { ReactComponent as HomeIcon } from '../assets/homeIcon.svg'

const Main = () => {

  //const [state, setState] = useState();

  return (
    <Layout>
      <div>This is Main Page</div>
      <HomeIcon/>
    </Layout>
  );
};

export default Main;