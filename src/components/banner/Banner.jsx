import React, { useRef } from "react";
import styles from "./banner.module.css";
import { TfiArrowDown } from "react-icons/tfi";

const Banner = () => {
  const containerRef = useRef(null);

  // animate heading on mouse over
  const handleMouseEnter = (index) => {
    const container = containerRef.current;
    const spans = container.querySelectorAll("span");
    spans.forEach((span) => (span.style.marginRight = ""));
    const hoveredSpan = spans[index];
    hoveredSpan.classList.add("scaled");
    const originalWidth = hoveredSpan.offsetWidth / 1.2;
    const increment = hoveredSpan.offsetWidth - originalWidth;
    hoveredSpan.style.marginRight = `${increment}px`;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    const spans = container.querySelectorAll("span");
    // Reset all
    spans.forEach((span) => {
      span.style.marginRight = "";
      span.classList.remove("scaled");
    });
  };
  return (
    <div className={styles.banner}>
      <div className={styles.banner_wrapper}>
        <div>
          <div className={styles.heading} ref={containerRef}>
            {["EMPOWER", "YOUR", "GLOBAL", "TRADE"].map((text, index) => (
              <span
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.tag_line}>
          <p>with high-efficiency and FTZ solutions.</p>
        </div>
        <div className={styles.scroller}>
          <p>
            Scroll more <br />& explore
          </p>
          <span>
            <TfiArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
