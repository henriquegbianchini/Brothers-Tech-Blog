import React from 'react';
import "./footer.css";

export default function Footer() {
  return(
    <div className="footer">
      <div className="contact">
        <h3>Brothers Tech<span>.Blog</span></h3>
        <li>By Henrique Bianchini and Rafael Reis</li>
        <li>brotherstechblog@gmail.com</li>
      </div>
      <div className="links">
        <li className="underline">Links</li>
        <li className="inline">Home</li>
        <li className="inline">Sobre</li>
        <li className="inline">Artigos</li>
        <li className="inline">Contato</li>
      </div>
      <div className="categories">
        <li className="underline">Categorias</li>
        <li className="inline">Redes</li>
        <li className="inline">Software</li>
        <li className="inline">Hardware</li>
        <li className="inline">Segurança</li>
        <li className="inline">Computação</li>
        <li className="inline">Progamação</li>
      </div>
    </div>
  )
}
