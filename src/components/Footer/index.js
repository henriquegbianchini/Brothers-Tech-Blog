import React from 'react';
import "./footer.css";

export default function Footer() {
  return(
    <div className="footer">
      <div className="contact">
        <li>Brothers Tech.Blog</li>
        <li>By Henrique Bianchini and Rafael Reis</li>
        <li>brotherstechblog@gmai.com</li>
      </div>
      <div className="links">
        <li className="underline">Links</li>
        <li>Home</li>
        <li>Sobre</li>
        <li>Artigos</li>
        <li>Contato</li>
      </div>
      <div className="categories">
        <li className="underline">Categorias</li>
        <li>Redes</li>
        <li>Software</li>
        <li>Hardware</li>
        <li>Segurança</li>
        <li>Computação</li>
        <li>Progamação</li>
      </div>
    </div>
  )
}
