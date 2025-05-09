import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/JohnsonAppLogo-copy.png';
import '../../assets/styles/Navbar.css';
import Topbar from '../Topbar/Topbar'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
      if (window.innerWidth >= 850) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Topbar />
      <nav className={`navbar ${isMobile && isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {isMobile && (
          <button className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}

        <div className={`navbar-links ${isMobile ? (isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed') : ''}`}>
          <Link to="/" onClick={() => isMobile && toggleMenu()} className='first-link'>
            Home
          </Link>
          <Link to="/sales" onClick={() => isMobile && toggleMenu()}>
            Sales
          </Link>
          <Link to="/gallery" onClick={() => isMobile && toggleMenu()}>
            Gallery
          </Link>
        </div>
      </nav>

      {isMobile && isMenuOpen && <div className="overlay" onClick={toggleMenu} />}
    </>
  );
};

export default Navbar;