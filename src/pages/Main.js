import React from 'react';
import Layout from '../components/Layout';
import { ReactComponent as Icon } from '../assets/icon.svg'
import { ReactComponent as Props } from '../assets/PROPS.svg'

const iconStyle = {
  width: "100%",
  marginTop: "30%"
};

const propsStyle = {
  width: "100%",
  marginTop: "5%"
};

const introStyle = {
  width: "100%",
  marginTop: "10%",
  fontSize: "0.85em",
  color: "grey"
}

const Main = () => {

  return (
    <Layout>
      <Icon style={iconStyle}/>
      <Props style={propsStyle}/>
      <div style={introStyle}> 안전한 계약을 위한 첫 걸음 </div>
    </Layout>
  );
};

export default Main;