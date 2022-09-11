import React from "react";
import brandLogo from "../images/LoginBrandLogo.png";
import styles from "./loginLogo.module.css";

const LoginLogo = () => {
  return (
    <div className={styles.loginLogo}>
      <img src={brandLogo} alt="logo" />
    </div>
  );
};

export default LoginLogo;
