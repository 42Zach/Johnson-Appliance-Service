import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/HomePage.css';
import Navbar from '../components/Navbar/Navbar';
import FourInFront from '../assets/images/FourInFront.jpg';
import SQLogo from '../assets/images/SQLogo.jpg';
import FrigidaireLogo from '../assets/images/FrigidaireLogo.png';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    const serviceCardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );
        serviceCardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            serviceCardsRef.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <>
            <Navbar />
            <main className='homepage-content'>
                <div className="introduction">
                    <h1>Serving the Bitterroot Valley since 1972</h1>
                    <p>For 50+ years, Johnson Appliance Service has been a trusted name in the Bitterroot Valley. As a family-owned business, we take pride in providing honest and expert repairs—because you deserve service that feels like family.</p>
                    <a className='schedule-repair-button' href='tel:+14063633592'>Shedule A Repair</a>
                </div>
                <div className="introduction-image"><img src={FourInFront} alt="Jack, Jay, Joe, and Cade Johnson" /></div>
            </main>

            <section className="services-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {[
                        {
                            title: 'Appliance Repair',
                            description: 'We repair all types of residential appliances, ensuring they work like new.',
                        },
                        {
                            title: 'Warranty Work',
                            description: 'We handle warranty repairs for eligible appliances.',
                        },
                        {
                            title: 'Parts Sales',
                            description: 'Find genuine replacement parts for your appliances.',
                        },
                        {
                            title: 'New Appliances',
                            description: 'Shop the latest models from our trusted brands.',
                            logos: [SQLogo, FrigidaireLogo],
                            link: '/sales',
                        },
                        {
                            title: 'Reconditioned Appliance Sales',
                            description: 'Affordable, high-quality reconditioned appliances for every need.',
                        },
                        {
                            title: 'Delivery & Installation',
                            description: 'Optional delivery and installation services within Ravalli County.',
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            ref={(el) => (serviceCardsRef.current[index] = el)}
                        >
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {service.logos && (
                                <div className="brand-logos">
                                    {service.logos.map((logo, i) => (
                                        <img key={i} src={logo} alt={`Brand Logo ${i + 1}`} className='brand-logo' />
                                    ))}
                                </div>
                            )}
                            {service.link && (
                                <div className="learn-more-container">
                                    <Link to={service.link} className="learn-more-button">
                                        Explore Options
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="map-section">
                <h2>Find Us</h2>
                <p className="location-text">421 S 1st St, Hamilton, MT</p>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.0426959035751!2d-114.15526294219316!3d46.24293741478897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535eb7392434ae9b%3A0x9c08ba93715cab7c!2sJohnson%20Appliance%20Service!5e0!3m2!1sen!2sus!4v1739680625337!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Embed"
                    ></iframe>
                </div>
            </section>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    )
}

export default HomePage;