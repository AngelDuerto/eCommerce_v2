import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/slide1.webp';
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';

const HomeSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [slide1, slide2, slide3];

  const getSlideStyle = (index) => ({
    transform: `translateX(-${activeSlide * 100}%)`,
    transition: 'transform 1s ease-in-out'
  });

  return (
    <section className="sliderHome">
      <div className="sliderContainer">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="slide"
            style={getSlideStyle(index)}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="sliderDots">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`dot ${activeSlide === index ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSlider;