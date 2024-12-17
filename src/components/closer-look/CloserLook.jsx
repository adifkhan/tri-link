import React from "react";
import styles from "./closerLook.module.css";
import Slider from "./Slider";

const CloserLook = () => {
  return (
    <div className={styles.closer_look}>
      <div className={styles.heading}>
        <h2>A Closer Look</h2>
      </div>
      <Slider />
    </div>
  );
};

export default CloserLook;
