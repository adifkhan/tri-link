import React from "react";
import styles from "./services.module.css";

const ServiceDetails = () => {
  return (
    <div className={styles.service_details}>
      <div className={styles.container}>
        <div className={styles.detail_wrapper}>
          <h4>Cost-Saving FTZ Fulfillment</h4>
          <p>
            Using our top-tier 3PL warehouses within Free Trade Zones, you can substantially reduce
            or eliminate taxes, duties, and trade fees, elevating your bottom line.
          </p>
        </div>
        <div className={styles.detail_wrapper}>
          <h4>Unmatched FDA/EPA Approved Relabeling</h4>
          <p>
            Tri-Link is the only Environmental Protection Agency (EPA) approved labeling facility,
            offering unparalleled FDA approved re-labeling of products.
          </p>
        </div>
        <div className={styles.detail_wrapper}>
          <h4>World-Class Warehouse Services</h4>
          <p>
            Our cutting-edge facilities with best-in-class security & 24/7 monitoring meet the
            highest federal standards, so you can have peace of mind that your shipment is safe and
            secure.
          </p>
        </div>
        <div className={styles.detail_wrapper}>
          <h4>Efficient 3PL Services</h4>
          <p>
            Streamline your supply chain with seamless global transport, strategically placed entry
            points, inventory management, fulfillment, and distribution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
