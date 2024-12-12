import React from "react";
import styles from "./header.module.css";
import { BsArrowDownRightSquareFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [isSmallDevice, setIsSmallDevice] = React.useState(true);

  const handleResize = () => {
    setIsSmallDevice(window.innerWidth <= 1024);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <nav
        className={styles.mini_nav}
        style={{ display: isSmallDevice && openMenu ? "flex" : "none" }}
      >
        {navLinks?.map((link, i) => (
          <div key={i} className={styles.nav_link}>
            <a href={link.link}>
              <span>{link.label}</span>
              {link.icon}
            </a>
          </div>
        ))}
      </nav>
      <div className={styles.menu_icon}>
        <span
          className={styles.open_menu}
          style={{ display: openMenu ? "none" : "block", cursor: "pointer" }}
          onClick={() => setOpenMenu(true)}
        >
          <IoMenu size={24} />
        </span>
        <span
          className={styles.close_menu}
          style={{ display: openMenu ? "block" : "none", cursor: "pointer" }}
          onClick={() => setOpenMenu(false)}
        >
          <RxCross2 size={24} />
        </span>
      </div>
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
