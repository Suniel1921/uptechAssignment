import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './../components/navbar.css'
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='navbar'>
      <h3>Logo</h3>
      <div className='hamburgerMenu' onClick={toggleNav}>
        {showNav ? <BiX /> : <BiMenuAltRight />}
      </div>
      <ul className={`navlinks ${showNav ? 'show' : ''}`}>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/projects'}>Projects</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
