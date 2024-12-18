import React, { useEffect, useRef, useState } from "react";
import styles from "./closerLook.module.css";

const items = [
  {
    img: "/images/slide1.jpg",
    date: "October 14, 2024",
    text: "EPA Approved Warehouse & 3PL Offers All The Benefits Of A FTZ",
  },
  {
    img: "/images/slide2.jpg",
    date: "",
    text: "Unlocking Business Independence: Tri-Link Inc.’s Success Story in Suffolk County’s Foreign Trade Zone",
  },
  {
    img: "/images/slide3.jpg",
    date: "October 14, 2024",
    text: "How to Fastrack Your FTZ Solution",
  },
  { img: "/images/slide4.jpg", date: "October 14, 2024", text: "FTZ vs Bonded Warehouse" },
  {
    img: "/images/slide5.jpg",
    date: "October 14, 2024",
    text: "Top 8 Benefits of Foreign Trade Zones",
  },
  {
    img: "/images/slide6.jpg",
    date: "October 14, 2024",
    text: "Are Tariffs Truly Good for America?",
  },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalSlides = items.length;
  const slides = [items[totalSlides - 1], ...items, items[0]];

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleTransitionEnd = () => {
      if (currentIndex === slides.length - 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides);
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, slides.length, totalSlides]);

  return (
    <div className={styles.slider_container}>
      <div
        ref={sliderRef}
        className={styles.slider_wrapper}
        style={{
          transform: `translateX(${
            viewportWidth > 1024 ? `-${currentIndex * 50}%` : `-${currentIndex * 100}%`
          })`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {slides.map((slide, index) => (
          <div className={styles.slider}>
            <div className={styles.contents} style={{ backgroundImage: `url(${slide.img})` }}>
              <p>{slide.date}</p>
              <h4>{slide.text}</h4>
              <a href="#home">Read the article</a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrows}>
        <span onClick={goToPrev}>
          <svg
            aria-hidden="true"
            class="e-font-icon-svg e-far-arrow-alt-circle-left"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
          </svg>
        </span>
        <span onClick={goToNext}>
          <svg
            aria-hidden="true"
            class="e-font-icon-svg e-far-arrow-alt-circle-right"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Slider;
