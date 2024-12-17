import React from "react";
import styles from "./contact.module.css";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.logo}>
        <img src="/images/TriLink-Logo-White.svg" alt="logo" />
        <p>Keep in touch!</p>
      </div>
      <div className={styles.icons}>
        <span>
          <ImFacebook />
        </span>
        <span>
          <BsTwitterX />
        </span>
        <span>
          <BsInstagram />
        </span>
        <span>
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  );
};

export default Social;
