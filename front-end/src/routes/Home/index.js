import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from '../../components/Card';
import LastNews from '../../components/LastNews'
import './home.css';

const Home = () => {
  const [data, setData] = useState(null)
  const URL = 'http://localhost:3001/'

  useEffect(() => {
    axios({ method: 'get', url: URL})
      .then(function (response) {
        setData(response.data);
    })
    .catch(err => console.error("Error cannot get:", err))
  }, [])

  return (
    <div className="home">
      <hr className="home-line"/>
      <div className="card-container">
        {data ? (
          data.map((item) => (<Card key={item.id} title={item.email} description={item.password}/>))
      ) : (
        <p></p>
      )}
      </div>
      <div className="card-container">
        {data ? (
          data.map((item) => (<Card key={item.id} title={item.email} description={item.password}/>))
      ) : (
        <p></p>
      )}
      </div>
      <div className="card-container">
        {data ? (
          data.map((item) => (<Card key={item.id} title={item.email} description={item.password}/>))
      ) : (
        <p></p>
      )}
      </div>
   </div>
  );
}

// <h2 className="home-title">PRINCIPAIS</h2>
//<LastNews />
export default Home;
