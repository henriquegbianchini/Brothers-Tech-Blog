import React from 'react'
import Card from '../../components/Card';
import LastNews from '../../components/LastNews'
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <hr className="home-line" />
      <Card />
      <LastNews />
   </div>
  );
}

      // <h2 className="home-title">PRINCIPAIS</h2>
export default Home;
