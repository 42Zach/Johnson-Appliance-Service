import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import '../../assets/styles/Topbar.css';

const Topbar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-content">
                <a href='tel:+14063633592' className='phone-number'>
                    <FaPhone className='social-icon' /> (406) 363-3592
                </a>
                <div className="socials">
                    <a href="https://www.facebook.com/johnsonapp/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar;