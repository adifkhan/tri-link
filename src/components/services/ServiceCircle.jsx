import React, { useEffect, useRef } from "react";
import styles from "./services.module.css";

const ServiceCircle = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const contents = container.querySelectorAll(`.${styles.content}`);

      const viewportHeight = window.innerHeight;
      const containerRect = container.getBoundingClientRect();

      if (containerRect.top < 0) {
        contents.forEach((content) => {
          content.style.left = "50%";
          content.style.width = "180vw";
          content.style.transition = "width 0.3s ease-in .3s";
          const paragraph = content.querySelector("p");
          if (paragraph) {
            paragraph.style.opacity = "0";
            paragraph.style.transform = "scale(0.8)";
          }
        });
      } else if (containerRect.top < viewportHeight * 0.2) {
        contents.forEach((content) => {
          content.style.left = "50%";
          content.style.width = "20vw";
          content.style.transition = "all 0.3s ease-in-out";
          const paragraph = content.querySelector("p");
          if (paragraph) {
            paragraph.style.opacity = "0";
            paragraph.style.transform = "scale(0.8)";
          }
        });
      } else {
        contents.forEach((content, index) => {
          const leftPositions = ["17vw", "39vw", "61vw", "83vw"];
          content.style.left = leftPositions[index];
          content.style.width = "20vw";
          const paragraph = content.querySelector("p");
          if (paragraph) {
            paragraph.style.opacity = "1";
            paragraph.style.transform = "scale(1)";
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.circle_contents} ref={containerRef}>
      <div className={styles.content}>
        <p>Cost-Saving FTZ Fulfillment</p>
      </div>
      <div className={styles.content}>
        <p>Unmatched FDA/EPA Approved Relabeling</p>
      </div>
      <div className={styles.content}>
        <p>World-Class Warehouse Services</p>
      </div>
      <div className={styles.content}>
        <p>Efficient 3PL Services</p>
      </div>
    </div>
  );
};

export default ServiceCircle;
