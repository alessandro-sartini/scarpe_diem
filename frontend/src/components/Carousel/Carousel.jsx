import React, { useState, useEffect, useRef } from "react";
import CarouselSlide from "./CarouselSlide";

export default function Carousel({ array, topic }) {
  let carouselTitle = "";
  topic === "bestsellers"
    ? (carouselTitle = "I più venduti")
    : topic === "related"
    ? (carouselTitle = "Potrebbe interessarti...")
    : (carouselTitle = topic);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchMoveX = useRef(null);

  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
  const isDesktop = window.innerWidth >= 1280;

  const visibleSlides = isTablet ? 2 : isDesktop ? 3 : 1;
  // array dinamico a seconda del numero di elementi ricevuti
  const slideCount = array.length;
  const dotCount = isTablet
    ? Math.ceil(slideCount / 2)
    : isDesktop
    ? Math.ceil(slideCount / 3)
    : slideCount;

  const getDotIndex = (index) => {
    let step = 0;
    if (index % 2 === 0 && index !== 0) {
      step = 1;
    }

    if (isTablet) {
      return Math.min(Math.ceil(index / 2) + step, dotCount - 1);
    } else if (isDesktop) {
      return Math.min(Math.ceil(index / 3) + step, dotCount - 1);
    } else {
      return index;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % dotCount;
      setActiveDotIndex(getDotIndex(newIndex));
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + dotCount) % dotCount;
      setActiveDotIndex(getDotIndex(newIndex));
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setActiveDotIndex(getDotIndex(index));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchMoveX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchMoveX.current) {
      const diffX = touchStartX.current - touchMoveX.current;
      if (diffX > 50) {
        nextSlide();
      } else if (diffX < -50) {
        prevSlide();
      }
      touchStartX.current = null;
      touchMoveX.current = null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCurrentIndex(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="carousel">
      {/* title */}
      <h2 className="h2 display-title">{carouselTitle}</h2>

      {/* slides */}
      <div
        className="carousel-slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-slide-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {array?.map((product, i) => (
            <CarouselSlide key={i} object={product} />
          ))}
        </div>
      </div>

      {/* actions */}
      <div className="carousel-actions-box">
        <button className="btn carousel-arrow" onClick={prevSlide}>
          {"<"}
        </button>
        <div className="carousel-dots-box">
          {Array.from({ length: dotCount }).map((_, index) => (
            <div
              className={`dot ${activeDotIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <button className="btn carousel-arrow" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
}
