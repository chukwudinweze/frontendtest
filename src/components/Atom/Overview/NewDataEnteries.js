import React from "react";
import styles from "./NewDataEnteries.module.css";

const NewDataEnteries = ({ newEntery }) => {
  return <p className={styles.p}>{newEntery} more than yesterday</p>;
};

export default NewDataEnteries;
