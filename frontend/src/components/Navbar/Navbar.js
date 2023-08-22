import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const[activeLink, setActiveLink] = useState('');
          return (
            <nav className="navbar">
              <div className="logo">StartupWizard</div>
              <ul className="nav-links">
                <li>
                  <Link exact to="/" className={activeLink === 'home'? 'active' : ''} onClick={()=> setActiveLink('home')}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={activeLink === 'about' ? 'active' : ''} onClick={()=> setActiveLink('about')}>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          );
}


export default Navbar;