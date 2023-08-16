import React from 'react';
import "./sidebar.css";

export default function Navbar() {
  return(
    <nav className="sidebar">
      <ul className="side-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Artigos</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  )
}
