import React from "react";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import LoginLogo from "./LoginLogo";
import LinkUnderline from "./LinkUnderline";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <LoginLogo />
      </div>
      <div className={styles.formgroup}>
        <div className={styles.form}>
          <LoginForm />
          <ForgotPassword />
          <div className={styles.termOFservice}>
            <LinkUnderline label="Privacy policy" />
            <p>and</p>
            <LinkUnderline label="Terms of service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
