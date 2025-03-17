import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../assets/styles/AboutPage.css';

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <main className="about-page">
                <h1>About Us</h1>
                <p className="subtitle">Serving the Bitterroot Valley since 1972.</p>

                <section className="about-introduction">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est non repellat. Assumenda voluptatum delectus deserunt quisquam magni architecto repellendus minus ducimus est atque, accusamus laboriosam placeat, optio molestias tempora?</p>
                </section>

                <section className="gallery">
                    <div className="gallery-grid">
                        <div className="gallery-item">

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;