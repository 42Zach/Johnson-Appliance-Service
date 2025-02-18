import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../assets/styles/SalesPage.css';

const SalesPage = () => {
    return (
        <>
            <Navbar />
            <main className="sales-page">
                <h1>Explore Our Showroom</h1>
                <p className="subtitle">Discover the latest appliances from Speed Queen and Frigidaire.</p>

                <section className="showroom-section">
                    <h2>Our Showroom</h2>
                    <div className="showroom-images">
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </section>

                <section className="brand-section">
                    <h2>Speed Queen Laundry</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <img src="" alt="" />
                            <h3>Washers & Dryers</h3>
                            <p>Built to last, Speed Queen appliances are designed for durability and performance.</p>
                        </div>
                    </div>
                </section>

                <section className="brand-section">
                    <h2>Frigidaire Appliances</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <img src="" alt="" />
                            <h3>Refrigerators</h3>
                            <p>Keep your food fresh with Frigidaire's energy-efficient refrigerators.</p>
                        </div>
                        <div className="product-card">
                            <img src="" alt="" />
                            <h3>Dishwashers</h3>
                            <p>Effortlessly clean your dishes with Frigidaire's quiet and powerful dishwashers.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SalesPage;