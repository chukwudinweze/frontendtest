import React from "react";
import styles from "./NumberOfEntries.module.css";

const NumberOfEntries = ({ totalNumber }) => {
  return <p className={styles.p}>{totalNumber}</p>;
};

export default NumberOfEntries;
