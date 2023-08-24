import React from "react";
import './card.css';
import imageBrowser from '../../assets/browsers.png'
import author from '../../assets/autor1.png'

const Card = () => {
  return(
    <article className="card">
      <div className="card-img">
        <img src={imageBrowser} />
        <span className="category-show">RECENTE</span>
      </div>
      <div className="card-info">
        <h3 className="card-title">Evolução dos browsers e sua relação com as tecnologias front-end!</h3>
          <p className="post-author flex"> 
            <img src={author} className= "post-author-img"/>
            <span className="post-author-name">Henrique Bianchini</span>
            <span className="published-date">18 de Junho , 2023, 14:50</span>
          </p>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nostrum, quis aut repellat consequuntur voluptates animi nam minima mollitia nemo voluptatibus tempora molestias ea quibusdam sit dolorum ducimus. Nihil, deleniti?</p>
          <a href="artigo.html" className="post-btn">Ler mais</a>
     </div>
  </article>
  )
}
  export default Card;
