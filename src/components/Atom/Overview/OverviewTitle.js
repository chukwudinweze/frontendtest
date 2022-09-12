import React from "react";
import styles from "./OverviewTitle.module.css";

function OverviewTitle({ title }) {
  return <p className={styles.p}>{title}</p>;
}

export default OverviewTitle;
