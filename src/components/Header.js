import React from "react";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

const Header = ({ showArrowBack }) => {
  return (
    <header className={styles.header}>
      <Navigation showArrowBack={showArrowBack} />
    </header>
  );
};

export default Header;
