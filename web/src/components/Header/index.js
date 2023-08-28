import "./header.css";
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <header className="header">
      <Link to="/" className="header-title">BrotherTech<span>.Blog</span></Link>
      <li className="header-container">
        <Link to="/artigos" className="header-item">Artigos</Link>
        <Link to="/sobre" className="header-item">Sobre</Link>
        <Link to="/contato" className="header-item">Contato</Link>
      </li>
      <FaBars className="header-bars" onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </header>
  )
}

export default Header
