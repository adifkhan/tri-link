import CircleAnimBottom from "./CircleAnimBottom";
import CircleAnimTop from "./CircleAnimTop";
import styles from "./clients.module.css";
import CloudGallery from "./CloudGallery";

const Clients = () => {
  return (
    <div className={styles.container}>
      <CircleAnimTop />
      <div className={styles.client_wrapper}>
        <div className={styles.branding}>
          <div className={styles.indicator}>
            <h4>Our Clients</h4>
          </div>
          <div className={styles.desc}>
            <h2>
              <span style={{ color: "var(--light_color)" }}>
                Solving problems with <br />
                3PL and FTZ Solutions for the
              </span>
              <br />
              World’s Biggest Brands
            </h2>
            <p>
              Discover how our FTZ services streamline your import/export processes and reduce
              costs.
            </p>
          </div>
          <div className={styles.client_buttons}>
            <a href="#services">Services</a>
            <a href="#technology">Technology</a>
          </div>
        </div>
        <div className={styles.client_logos}>{/* <CloudGallery entries={entries} /> */}</div>
      </div>
      <CircleAnimBottom />
    </div>
  );
};

export default Clients;

const entries = [
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Grain-and-Barrel-White.svg",
    width: 120,
    height: 120,
    opacity: 0.8,
    alt: "Grain and Barrel",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/JetBlue-White.svg",
    width: 120,
    height: 120,
    opacity: 0.7,
    alt: "JetBlue",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Bacardi-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Jim-Bean-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/DribbleUp-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Davos-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/American-Airlines-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Stolen-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Delta-Airlines-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image:
      "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Palm-Bay-International-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Tianma-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Pernod-Ricard-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Amtrak-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Park-Street-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/DLTrading-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
  {
    image: "https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/DLTrading-White.svg",
    width: 120,
    height: 120,
    opacity: 0.6,
    alt: "Scotch",
  },
];
