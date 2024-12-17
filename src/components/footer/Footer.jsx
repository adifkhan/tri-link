import React from "react";
import styles from "./footer.module.css";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer_top}>
        <div className={styles.contents}>
          <div className={styles.logo_desc}>
            <img src="/images/Logo.png" alt="" />

            <div>
              <p>
                Tri Link delivers exceptional FTZ and 3PL services tailored to your global trade
                needs.
              </p>
              <p>
                Our solutions combine innovation, quality, and efficiency to exceed your
                expectations and meet your specific requirements.
              </p>
            </div>
          </div>
          <div className={styles.general}>
            <h5>General</h5>
            <ul>
              <li>
                <span>Service</span>
              </li>
              <li>
                <span>Warehouse</span>
              </li>
              <li>
                <span>Industries</span>
              </li>
              <li>
                <span>Technology</span>
              </li>
              <li>
                <span>About Us</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
          <div className={styles.services}>
            <h5>Services</h5>
            <ul>
              <li>
                <span>Third Party Logistic (3PL)</span>
              </li>
              <li>
                <span>Foreign Trade Zone (FTZ)</span>
              </li>
              <li>
                <span>Handing & Relabeling</span>
              </li>
              <li>
                <span>Documentation</span>
              </li>
              <li>
                <span>Compilance</span>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h5>Call Us!</h5>
            <ul>
              <li>
                <span>+1-888-487-7707</span>
              </li>
              <li>
                <span>
                  in California <br />
                  +1-562-280-7200
                </span>
              </li>
              <li>
                <span>
                  in Florida <br />
                  +1-786-249-7200
                </span>
              </li>
              <li>
                <span>
                  in New York <br />
                  +1-631-737-7500
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_social}>
          <p>Empowering Your Global Trade</p>
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
      </div>
      <div className={styles.footer_btm}>
        <p>© Tri-Link FTZ 2024, All Rights Reserved </p>
        <p>WEBSITE BY VIBE BRANDING</p>
      </div>
    </div>
  );
};

export default Footer;
