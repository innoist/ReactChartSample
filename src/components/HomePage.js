import React from 'react';
import { Link } from 'react-router-dom';
import ReactChart from './ReactChart'
const HomePage = () => {
  return (
    <div >
      <h1>React Slingshot</h1>
      <div style={{height:"800px"}}>
      <ReactChart />
      </div>
    
    </div>
  );
};

export default HomePage;
