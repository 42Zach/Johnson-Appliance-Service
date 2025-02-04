import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';
import logo from '../../assets/images/JohnsonAppLogo-copy.png';
import Topbar from '../Topbar/Topbar'

const Navbar = () => {
    return (
        <>
            <Topbar />
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Sales</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;