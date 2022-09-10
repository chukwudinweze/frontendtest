import React from "react";
import styles from "./pageTitle.module.css";

const PageTitle = ({ title }) => {
  return <p className={styles.p}>{title}</p>;
};

export default PageTitle;
