import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className='logo' onClick={()=>setOpen(false)}>Logo</Link>

      <ul className="">
        <li className="nav-item">
          <Link to="/" className='nav-link' onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className='nav-link' onClick={() => setOpen(false)}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className='nav-link' onClick={() => setOpen(false)}>Contact</Link>
        </li>
      </ul>

      <div>{ open ? <FiX /> : <FiMenu />}</div>
    </nav>
  );
}

export default Navbar;
