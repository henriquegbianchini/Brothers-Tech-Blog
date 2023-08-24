import React from 'react'
import './sidebar.css'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <aside className='sidebar' sidebar={active}>
      <FaWindowClose className='close-button' onClick={closeSidebar} />
      <ul>
        <li>
          <Link to="/" className='sidebar-item'>Home</Link>
        </li>
        <li>
          <Link to="/sobre" className='sidebar-item'>Sobre</Link>
        </li>
        <li>
          <Link to="artigos" className='sidebar-item'>Artigos</Link>
        </li>
        <li>
          <Link to="/contato" className='sidebar-item'>Contato</Link>
        </li>
      </ul>
    </aside>
  )
}
export default Sidebar
