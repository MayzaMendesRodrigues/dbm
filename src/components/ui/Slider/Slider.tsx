import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import './Slider.css';

interface SliderProps {
  content?: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  onSlideChange?: () => void;
}

const Slider: React.FC<SliderProps> = ({
  content = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % content.length);
    if (onSlideChange) {
      onSlideChange();
    }
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);
    if (onSlideChange) {
      onSlideChange();
    }
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    if (onSlideChange) {
      onSlideChange();
    }
    setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [autoPlay, autoPlayInterval, currentIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    if (autoPlay && intervalRef.current) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    }
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="nav-arrow prev"
              aria-label="Previo"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="nav-arrow next"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="slider-wrapper"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {content.map((item) => item)}
          </div>
        </div>

        {/* Dots Indicator */}
        {showDots && (
          <div className="dots-container">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Ir al ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${((currentIndex + 1) / content.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Slider;
