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
                    <p>For 50+ years, Johnson Appliance Service has been a trusted name in the Bitterroot Valley. As a family-owned business, we take pride in providing honest, expert repairs—because you deserve service that feels like family.</p>
                    <a className='learn-more-button' href='tel:+14063633592'>Shedule A Repair</a>
                </div>
                <div className="introduction-image"><img src={FourInFront} alt="Jack, Jay, Joe, and Cade Johnson" /></div>
            </main>

            <section className="services-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Appliance Repair</h3>
                        <p>We repair all types of residential appliances, ensuring they work like new.</p>
                    </div>
                    <div className="service-card">
                        <h3>Warranty Work</h3>
                        <p>We handle warranty repairs for eligible appliances.</p>
                    </div>
                    <div className="service-card">
                        <h3>Parts Sales</h3>
                        <p>Find genuine replacement parts for your appliances.</p>
                    </div>
                    <div className="service-card">
                        <h3>New Speed Queen & Frigidaire Appliances</h3>
                        <p>Shop the latest models from Speed Queen and Frigidaire appliances.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="service-card">
                        <h3>Reconditioned Appliance Sales</h3>
                        <p>Affordable, high-quality reconditioned appliances for every need.</p>
                    </div>
                    <div className="service-card">
                        <h3>Delivery & Installation</h3>
                        <p>Optional delivery and installation services within Ravalli County.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;