import React from "react";
import styles from "./contact.module.css";
import Social from "./Social";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Social />
      <div className={styles.contact}>
        <div className={styles.desc}>
          <div style={{ height: "30px" }}></div>
          <h2>
            Get Started <br /> with a <b>Free Quote</b> <br />
            or Consultation
          </h2>
          <div className={styles.phone}>
            <span>
              <FaPhone />
            </span>
            <p>
              Reach out! <br />
              +1-888-487-7707
            </p>
          </div>
        </div>
        <div className={styles.contact_form}>
          <form action="">
            <div className={styles.input_group}>
              <label htmlFor="">Name*</label>
              <input type="text" placeholder="Name*" />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="">Surname*</label>
              <input type="text" placeholder="Surname*" />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="">Email*</label>
              <input type="text" placeholder="Email*" />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="">Message*</label>
              <textarea name="" id="" placeholder="Message*"></textarea>
            </div>

            <div className={styles.submit_btn}>
              <input type="submit" value="SEND" />
            </div>
          </form>
          <div style={{ marginTop: "5px" }}>
            <label htmlFor=""> If you are a human seeing this field, please leave it empty.</label>
            <input
              type="text"
              style={{ lineHeight: "1.85", padding: "1px 2px", marginLeft: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
