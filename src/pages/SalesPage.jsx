import React, { useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../assets/styles/SalesPage.css';
import tr7 from '../assets/images/tr7_one.jpg';
import tr5 from '../assets/images/tr5.jpg';
import tc5 from '../assets/images/tc5.jpg';
import sq_electrolux from '../assets/images/sq_electrolux.jpg';
import refrig_one from '../assets/images/frigidaire_one.jpg';
import dishwasher_one from '../assets/images/frigidaire_dishwasher.jpg';
import range_one from '../assets/images/range_one.jpg';
import frigidaire_set from '../assets/images/frigidaire_set.jpg';
import frigidaire_microwave from '../assets/images/frigidaire_microwave.jpg';
import frigidaire_three from '../assets/images/frigidaire_three.jpg';

const SalesPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { src: tr7, alt: "Speed Queen TR7" },
        { src: tc5, alt: "Speed Queen TC5" },
        { src: tr5, alt: "Speed Queen TR5" },
        { src: sq_electrolux, alt: "Speed Queen Electrolux" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <>
            <Navbar />
            <main className="sales-page">
                <h1>Explore Our Showroom</h1>
                <p className="subtitle">Discover the latest appliances from Speed Queen and Frigidaire.</p>

                <section className="brand-section">
                    <h2>Speed Queen Laundry</h2>
                    <div className="slideshow" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                className={`mySlides ${index === currentSlide ? 'animate-fading' : ''}`}
                                src={slide.src}
                                alt={slide.alt}
                                style={{ width: '100%', display: index === currentSlide ? 'block' : 'none' }}
                            />
                        ))}
                    </div>
                    <div className="product-description">
                        <h3>Now Offering All Speed Queen Models</h3>
                        <p>Built to last, Speed Queen appliances are designed for durability and performance</p>
                    </div>
                    {/* <div className="product-grid">
                        <div className="product-card">
                            <img src={tr7} alt="" />
                            <h3>Washers & Dryers</h3>
                            <p>Built to last, Speed Queen appliances are designed for durability and performance.</p>
                        </div>
                    </div> */}
                </section>

                <section className="brand-section">
                    <h2>Frigidaire Appliances</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <img src={refrig_one} alt="Frigidaire Refrigerator" />
                            <h3>Refrigerators</h3>
                            <p>Keep your food fresh with Frigidaire's energy-efficient refrigerators.</p>
                        </div>
                        <div className="product-card">
                            <img src={frigidaire_three} alt="Frigidaire Upright Freezer" />
                            <h3>Freezers</h3>
                            <p>Store your food in style with Frigidaire's sleek upright & chest freezers.</p>
                        </div>
                        <div className="product-card">
                            <img src={dishwasher_one} alt="" />
                            <h3>Dishwashers</h3>
                            <p>Effortlessly clean your dishes with Frigidaire's quiet and powerful dishwashers.</p>
                        </div>
                        <div className="product-card">
                            <img src={frigidaire_microwave} alt="Frigidaire Microwave" />
                            <h3>Microwaves</h3>
                            <p>Cook and reheat with precision using Frigidaire's versatile microwaves.</p>
                        </div>
                        <div className="product-card">
                            <img src={range_one} alt="Frigidaire Range" />
                            <h3>Ranges</h3>
                            <p>Prepare meals with ease using Frigidaire's stylish and functional ranges.</p>
                        </div>
                        <div className="product-card">
                            <img src={frigidaire_set} alt="Frigidaire Washer and Dryer" />
                            <h3>Laundry</h3>
                            <p>Simplify laundry day with Frigidaire's efficient washers and dryers.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SalesPage;