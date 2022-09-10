import React from "react";
import styles from "./HighlightCheckRect.module.css";

const HighlightCheckRect = ({ color }) => {
  return <div className={styles.div} style={{ background: color }}></div>;
};

export default HighlightCheckRect;
