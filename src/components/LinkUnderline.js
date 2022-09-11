import React from "react";
import styles from "./LinkUnderline.module.css";

const LinkUnderline = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default LinkUnderline;
