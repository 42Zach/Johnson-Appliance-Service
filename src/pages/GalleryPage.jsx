import React from 'react';
import '../assets/styles/GalleryPage.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GalleryOne from '../assets/images/GalleryOne.jpg';
import GalleryTwo from '../assets/images/GalleryTwo.jpg';
import GalleryThree from '../assets/images/GalleryThree.jpg';
import GalleryFour from '../assets/images/GalleryFour.jpg';
import GalleryFive from '../assets/images/GalleryFive.jpg';

const GalleryPage = () => {
    const galleryImages = [
        { src: GalleryOne, alt: 'Grandpa & Zachary rebuilding a washer transmission' },
        { src: GalleryTwo, alt: 'Zachary working on a washer transmission' },
        { src: GalleryThree, alt: 'Jay, Grandpa, and Beau sitting on the tailgate' },
        { src: GalleryFour, alt: 'The lint ball solar system' },
        { src: GalleryFive, alt: 'Cat nap in the dryer' },
    ];

    return (
        <>
            <Navbar />
            <main className="gallery-page">
                <h1>Our Gallery</h1>
                <p className="subtitle">A glimpse into our work, family, and community.</p>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default GalleryPage;