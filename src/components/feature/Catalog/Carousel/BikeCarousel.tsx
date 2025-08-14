import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BikeCarousel.css';

interface CarouselProps {
  images: { url: string }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const BikeCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = false,
  autoPlayInterval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className="bike-carousel">
      <div
        className="bike-carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="bike-carousel-slide">
            <img
              src={image.url}
              alt={`Bike view ${index + 1}`}
              loading="lazy"
            />
            <div className="bike-carousel-overlay"></div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="bike-carousel-button prev"
        disabled={isTransitioning}>
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={nextSlide}
        className="bike-carousel-button next"
        disabled={isTransitioning}
      >
        <ChevronRight size={16} />
      </button>

      <div className="bike-carousel-counter">
        {currentIndex + 1}/{images.length}
      </div>

      <div className="bike-carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`bike-carousel-dot ${index === currentIndex ? 'active' : ''}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default BikeCarousel;
