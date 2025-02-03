import React, { useRef } from "react";
import styles from "./banner.module.css";
import { TfiArrowDown } from "react-icons/tfi";

const Banner = () => {
  const spansRef = useRef([]);

  // animate heading on mouse move over
  const handleMouseMove = (event) => {
    if (window.innerWidth < 1025) return;

    const mouseX = event.clientX;
    const scaleSize = 1.25;

    spansRef?.current?.forEach((span, index) => {
      const spanRect = span.getBoundingClientRect();

      if (index === 0 && mouseX <= spanRect.right) {
        span.style.transform = `scale(${scaleSize})`;
        const originalWidth = span.offsetWidth / scaleSize;
        const increment = span.offsetWidth - originalWidth;
        const spanToTranslateX = spansRef.current.filter((sp, i) => i > 0);
        spanToTranslateX.forEach((el) => (el.style.transform = `translateX(${increment}px)`));
      } else if (mouseX >= spanRect.left && mouseX <= spanRect.right) {
        span.style.transform = `scale(${scaleSize})`;
        const originalWidth = span.offsetWidth / scaleSize;
        const increment = span.offsetWidth - originalWidth;

        const spanToTranslateX = spansRef.current.filter((sp, i) => i > index);
        spanToTranslateX.forEach((el) => (el.style.transform = `translateX(${increment}px)`));
        const spanToReset = spansRef.current.filter((sp, i) => i < index);
        spanToReset.forEach((el) => (el.style.transform = `translateX(0px)`));
      }
    });
  };

  const handleOnMouseLeave = () => {
    spansRef?.current?.forEach((span) => (span.style.transform = "scale(1)"));
  };

  return (
    <div className={styles.banner} onMouseMove={handleMouseMove} onMouseLeave={handleOnMouseLeave}>
      <div className={styles.banner_wrapper}>
        <div>
          <div className={styles.heading}>
            {["EMPOWER", "YOUR", "GLOBAL", "TRADE"].map((text, index) => (
              <span key={index} ref={(el) => (spansRef.current[index] = el)}>
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
