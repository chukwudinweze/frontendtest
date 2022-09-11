import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.LoginForm}>
      <em>Login</em>
      <p>Kindly enter your details to login</p>
      <div className={styles.usernameWrapper}>
        <label htmlFor="username"></label>
      </div>
    </form>
  );
};

export default LoginForm;
