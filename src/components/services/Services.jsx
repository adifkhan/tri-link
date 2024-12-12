import React from "react";
import styles from "./services.module.css";
import ServiceCircle from "./ServiceCircle";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.title}>
        <h4>Worldwide Transport, Simplified</h4>
      </div>
      <ServiceCircle />
      <ServiceDetails />
    </div>
  );
};

export default Services;
