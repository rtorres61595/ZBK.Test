import React, { useState, useEffect } from 'react';
import { SignUpButton } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ZeusBeKind
            <i className="fas fa-snowboarding" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/skatemap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skate Map
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/spots'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Spots
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li id="signupMobileBtn" className='nav-item'>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Signup
              </Link>
            </li>
          </ul>
          {button && <SignUpButton buttonStyle='btn--outline'>Sign Up</SignUpButton>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
