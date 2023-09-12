import React from "react";
import './card.css';
import ImageUrl from '../../assets/browsers.png'
import author from '../../assets/autor1.png'

const Card = () => {
  return(
    <article>
      <div>
        <img src={ImageUrl} alt="Card" className="card-image" />
        <span></span>
      </div>
      <div>
        <title></title>
        <p></p>
      </div>
    </article>
  )
}

export default Card
