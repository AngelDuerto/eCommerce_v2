import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/slide1.webp';
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';

// HomeSlider component for displaying an automatic image slideshow
const HomeSlider = () => {
const [activeSlide, setActiveSlide] = useState(0); // State to track the currently active slide

// useEffect hook to automatically change slides every 5 seconds
useEffect(() => {
    const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % 3); // Cycles through 3 slides
    }, 5000);

    return () => clearInterval(interval); // Cleanup function to clear the interval
}, []);

// Array of slide images
    const slides = [slide1, slide2, slide3];

    // Function to get the style for the slide based on the active slide
    const getSlideStyle = (index) => ({
        transform: `translateX(-${activeSlide * 100}%)`, // Slides are displayed side by side
        transition: 'transform 1s ease-in-out' // Smooth transition effect
    });

    return (
        <section className="sliderHome">
        <div className="sliderContainer">
            {slides.map((slide, index) => (
                <div 
                    key={index} 
                    className="slide"
                    style={getSlideStyle(index)} // Apply the style based on the active slide
                >
                    <img src={slide} alt={`Slide ${index + 1}`} /> {/* Display the slide image */}
                </div>
            ))}
        </div>
        {/* Navigation dots for manual slide control */}
        <div className="sliderDots">
            {[0, 1, 2].map((index) => (
                <div
                    key={index}
                    className={`dot ${activeSlide === index ? 'active' : ''}`} // Highlight the active slide
                    onClick={() => setActiveSlide(index)} // Change the active slide on click
                />
            ))}
        </div>
        </section>
    );
};

export default HomeSlider;