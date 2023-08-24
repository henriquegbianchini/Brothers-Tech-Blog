import React from 'react'
import Card from '../../components/Card';
import './home.css';

const Home = () => {

  return (
    <div className="home">
      <h2 className="home-title">PRINCIPAIS</h2>
      <hr className="home-line" />
      <Card />
      <Card />
      <h2 className="home-title" >Ultimas Noticias</h2>
      <hr className="home-line" />
      <Card />
      <Card />
   </div>
  );
}

export default Home;
