import React from "react";
import './card.css';
import ImageUrl from '../../assets/browsers.png'
// import author from '../../assets/autor1.png'

const Card = ({title, description, password}) => {
  return(
    <div className="card-container">
      <article className="card">
        <div className="card-img-container">
          <img src={ImageUrl} alt="imageCard" className="card-img"/>
          <span className="popular-indicator">POPULAR</span>
        </div>
        <div className = "card-info">
          <p className="post-title">{}Qual e o melhor sistema opreracional para programadores?</p>
          <p className="post-author-name">por {}Ruan Silva</p>
          <p className="post-description">{}Lorem ipsum dolor sit amet, qui minim labore adipisicing Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. </p>
          <a href="#" className="post-btn">Ler mais</a>
        </div>
      </article>
    </div>
  )
}

export default Card
