import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeSquare } from 'react-icons/fa'
import "./footer.css";

export default function Footer() {
  return(
    <div className="footer">
      <div className="contact">
        <li><Link to="/" className="contact-item">BrothersTech.Blog</Link></li>
        <li>By Henrique Bianchini and Rafael Reis</li>
        <li><FaEnvelopeSquare className="envelope-item"/>brotherstechblog@gmail.com</li>
      </div>
      <div className="links">
        <li className="underline">Links</li>
        <li><Link to="/" className="inline">Home</Link></li>
        <li><Link to="/sobre" className="inline">Sobre</Link></li>
        <li><Link to="/artigos" className='inline'>Artigos</Link></li>
        <li><Link to="/contato" className="inline">Contato</Link></li>
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
