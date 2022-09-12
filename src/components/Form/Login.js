import React from "react";
import ForgotPassword from "../Atom/Form/ForgotPassword";
import LoginLogo from "../Atom/SideNav/LoginLogo";
import LinkUnderline from "../Atom/Form/LinkUnderline";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";

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
