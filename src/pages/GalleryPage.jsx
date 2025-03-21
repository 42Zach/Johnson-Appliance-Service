import React, { useEffect, useRef } from 'react';
import '../assets/styles/GalleryPage.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GalleryOne from '../assets/images/GalleryOne.jpg';
import GalleryTwo from '../assets/images/GalleryTwo.jpg';
import GalleryThree from '../assets/images/GalleryThree.jpg';
import GalleryFour from '../assets/images/GalleryFour.jpg';
import GalleryFive from '../assets/images/GalleryFive.jpg';
import GallerySix from '../assets/images/GallerySix.jpg';
import GallerySeven from '../assets/images/GallerySeven.jpg';
import GalleryEight from '../assets/images/GalleryEight.jpg';

const GalleryPage = () => {
    const galleryItemsRef = useRef([]);

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
        galleryItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });
        return () => {
            galleryItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    const galleryImages = [
        { src: GalleryTwo, alt: 'Zachary working on a washer transmission' },
        { src: GalleryThree, alt: 'Jay, Grandpa, and Beau sitting on the tailgate' },
        { src: GalleryFour, alt: 'The lint ball solar system' },
        { src: GalleryFive, alt: 'Cat nap in the dryer' },
        { src: GalleryEight, alt: 'Jonas hooking up a gas range' },
        { src: GallerySeven, alt: 'Grandpa picking apples' },
        { src: GallerySix, alt: 'Joe standing on the counter' },
        { src: GalleryOne, alt: 'Grandpa & Zachary rebuilding a washer transmission' },
    ];

    return (
        <>
            <Navbar />
            <main className="gallery-page">
                <h1>Our Gallery</h1>
                <p className="subtitle">A glimpse into our work, family, and community.</p>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div
                            className="gallery-item"
                            key={index}
                            ref={(el) => (galleryItemsRef.current[index] = el)} // Assign ref to each item
                        >
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