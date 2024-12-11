import React from "react";
import styles from "./banner.module.css";
import { TfiArrowDown } from "react-icons/tfi";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_wrapper}>
        <div>
          <div className={styles.heading}>
            <span>EMPOWER</span>
            <span>YOUR</span>
            <span>GLOBAL</span>
            <span>TRADE</span>
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
