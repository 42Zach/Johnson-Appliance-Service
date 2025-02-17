import React from 'react';
import '../../assets/styles/Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>421 S 1st St, Hamilton, MT 59840</p>
                        <p>(406) 363-3592</p>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Sales</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/johnsonapp/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/johnson_appliance/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Johnson Appliance Service. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;