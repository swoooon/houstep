import React from 'react';
import Layout from '../components/Layout';
import { ReactComponent as HomeIcon } from '../assets/homeIcon.svg'

const styles = {
  width: "100%"
};

const Main = () => {

  return (
    <Layout>
      <div style={styles}>This is Main Page</div>
      <HomeIcon style={styles}/>
    </Layout>
  );
};

export default Main;