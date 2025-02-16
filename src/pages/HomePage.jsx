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
                    <p>For 50+ years, Johnson Appliance Service has been a trusted name in the Bitterroot Valley. As a family-owned business, we take pride in providing honest and expert repairs—because you deserve service that feels like family.</p>
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

            {/* NEEEEEEED TO ADDD LOCATION ADDRESS
            !
            !
            !
            ! */}

            <section className="map-section">
                <h2>Find Us</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.0426959035751!2d-114.15526294219316!3d46.24293741478897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535eb7392434ae9b%3A0x9c08ba93715cab7c!2sJohnson%20Appliance%20Service!5e0!3m2!1sen!2sus!4v1739680625337!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Google Maps Embed"
                    ></iframe>
                </div>
            </section>
        </>
    )
}

export default HomePage;