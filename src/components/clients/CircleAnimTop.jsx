import React, { useEffect, useRef, useState } from "react";
import styles from "./clients.module.css";

const CircleAnimTop = () => {
  const circleContainerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [transformY, setTransformY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const containerRect = circleContainerRef?.current?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const img = circleContainerRef.current.querySelector("img");

      const maxScale = 25;
      const minScale = 1;

      if (containerRect.top < viewportHeight * 0.1) {
        const newScale = Math.max(
          minScale,
          Math.abs(viewportHeight * 0.1 - containerRect.top) / 100
        );

        setScale(Math.min(maxScale, newScale));
        setTransformY(Math.min(300, viewportHeight * 0.1 - containerRect.top));
        const newOpacity = Math.max(0, 1 - (viewportHeight * 0.1 - containerRect.top) / 1000);
        img.style.opacity = newOpacity;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.top_circle_container} ref={circleContainerRef}>
      <div
        className={styles.circle}
        style={{ transform: `translate(-50%, ${transformY}px) scale(${scale})` }}
      >
        <div className={styles.circle_bg}></div>
        <img src="/images/Green-Circle.png" alt="green circle" />
      </div>
    </div>
  );
};

export default CircleAnimTop;
