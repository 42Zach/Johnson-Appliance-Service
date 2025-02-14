import React from 'react';
import '../assets/styles/HomePage.css';
import Navbar from '../components/Navbar/Navbar';
import FourInFront from '../assets/images/FourInFront.jpg';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main className='homepage-content'>
                <div className="introduction">
                    <h1>Serving the Bitterroot Valley since 1972.</h1>
                    <p>For over 50 years, Johnson Appliance Service has been keeping homes in the Bitterroot Valley running smoothly. As a family-owned business, we take pride in providing honest, reliable, and expert appliance repair services to our community. Whether it's your washer, fridge, or stove, we're here to help - just like family.</p>
                    <button className='learn-more-button'>Learn More</button>
                </div>
                <div className="introduction-image"><img src={FourInFront} alt="Jack, Jay, Joe, and Cade Johnson" /></div>
            </main>
        </>
    )
}

export default HomePage;