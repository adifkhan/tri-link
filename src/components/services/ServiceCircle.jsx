import React, { useEffect, useRef, useState } from "react";
import styles from "./services.module.css";

const ServiceCircle = () => {
  const containerRef = useRef(null);
  const [circleWidth, setCircleWidth] = useState("20vw");

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const contents = container.querySelectorAll(`.${styles.content}`);
      const viewportHeight = window.innerHeight;
      const containerRect = container.getBoundingClientRect();

      if (containerRect.top < 0) {
        let newWidth = 20;
        const displacement = Math.abs(containerRect.top);
        setCircleWidth(`${newWidth + parseInt(Math.min(displacement, 180))}vw`);

        contents.forEach((content) => {
          content.style.left = "50%";
          const paragraph = content.querySelector("p");
          if (paragraph) {
            paragraph.style.opacity = "0";
          }
        });
      } else if (containerRect.top < viewportHeight * 0.2) {
        setCircleWidth("20vw");
        contents.forEach((content) => {
          content.style.left = "50%";
          const paragraph = content.querySelector("p");
          if (paragraph) {
            paragraph.style.opacity = "0";
          }
        });
      } else {
        setCircleWidth("20vw");
        contents.forEach((content, index) => {
          const leftPositions = ["17vw", "39vw", "61vw", "83vw"];
          content.style.left = leftPositions[index];
          const paragraph = content.querySelector("p");
          if (paragraph) {
            paragraph.style.opacity = "1";
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
      <div className={styles.content} style={{ width: `${circleWidth}` }}>
        <p>Cost-Saving FTZ Fulfillment</p>
      </div>
      <div className={styles.content} style={{ width: `${circleWidth}` }}>
        <p>Unmatched FDA/EPA Approved Relabeling</p>
      </div>
      <div className={styles.content} style={{ width: `${circleWidth}` }}>
        <p>World-Class Warehouse Services</p>
      </div>
      <div className={styles.content} style={{ width: `${circleWidth}` }}>
        <p>Efficient 3PL Services</p>
      </div>
    </div>
  );
};

export default ServiceCircle;
