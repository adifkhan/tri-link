import React, { useEffect, useRef, useState } from "react";
import styles from "./clients.module.css";

const CircleAnimBottom = () => {
  const circleBContainerRef = useRef(null);
  const [axisY, setAxisY] = useState(0);
  const [width, setWidth] = useState(window.innerWidth * 1.5);

  useEffect(() => {
    const handleScroll = () => {
      const containerRect = circleBContainerRef?.current?.getBoundingClientRect();
      const containerHeight = circleBContainerRef.current.clientHeight;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const text = circleBContainerRef.current.querySelector("p");

      if (containerRect.top < -viewportHeight * 0.5) {
        const axisLength = viewportHeight * 0.6 - containerRect.top;
        setAxisY(Math.min(containerHeight - 325, axisLength));
        setWidth(
          Math.max(viewportWidth > 1024 ? 650 : viewportWidth * 0.7, containerRect.bottom - 325)
        );
        text.style.opacity = 1;
      } else if (containerRect.top < viewportHeight * 0.6) {
        const axisLength = viewportHeight * 0.6 - containerRect.top;
        setAxisY(Math.min(containerHeight - 325, axisLength));
        setWidth(
          Math.max(viewportWidth > 1024 ? 650 : viewportWidth * 0.7, containerRect.bottom - 325)
        );
        text.style.opacity = 0;
      } else {
        setWidth(containerRect.bottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.btm_circle_container} ref={circleBContainerRef}>
      <div className={styles.circle} style={{ width: `${width}px`, top: `${axisY}px` }}>
        <p>Ready to Simplify Logistics and Reduce Costs with World-Class 3PL and FTZ Solutions?</p>
      </div>
    </div>
  );
};

export default CircleAnimBottom;
