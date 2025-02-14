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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit qui commodi accusamus rem repudiandae ipsum dicta ad quam minus, rerum, in odit dignissimos ex, distinctio hic cupiditate unde magnam.</p>
                    <button className='learn-more-button'>Learn More</button>
                </div>
                <div className="introduction-image"><img src={FourInFront} alt="Jack, Jay, Joe, and Cade Johnson" /></div>
            </main>
        </>
    )
}

export default HomePage;