import React from "react";
import logoIMG from "../../Assets/images/asideLogoImg.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <li className={styles.logo}>
      <img src={logoIMG} alt="star war logo" />
    </li>
  );
};

export default Logo;
