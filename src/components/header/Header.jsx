import React from "react";
import styles from "./header.module.css";
import { BsArrowDownRightSquareFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/Logo.png" alt="logo" />
      </div>
      <nav className={styles.navbar}>
        {navLinks?.map((link, i) => (
          <div key={i} className={styles.nav_link}>
            <a href={link.link}>
              <span>{link.label}</span>
              {link.icon}
            </a>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;

const navLinks = [
  { label: "Services", link: "#services", icon: <BsArrowDownRightSquareFill /> },
  { label: "Warehouse", link: "#warehouse", icon: "" },
  { label: "Industries", link: "#industries", icon: "" },
  { label: "Technology", link: "#technology", icon: "" },
  { label: "About Us", link: "#about-us", icon: <BsArrowDownRightSquareFill /> },
  { label: "Contact", link: "#contact", icon: "" },
  { label: "Clients Portal", link: "#clients-portal", icon: <BsArrowDownRightSquareFill /> },
];
