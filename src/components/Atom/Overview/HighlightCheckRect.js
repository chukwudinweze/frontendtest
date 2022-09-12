import React from "react";
import styles from "./HighlightCheckRect.module.css";

const HighlightCheckRect = ({
  color,
  width,
  height,
  marginRight,
  marginLeft,
}) => {
  return (
    <div
      className={styles.div}
      style={{ background: color, width, height, marginRight, marginLeft }}
    ></div>
  );
};

export default HighlightCheckRect;
