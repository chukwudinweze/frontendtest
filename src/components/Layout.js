import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import SideNav from "./SideNav";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sideNavPosition}>
        <SideNav />
      </div>
      <div className={styles.formatpage}>
        <Header />
        <Overview />
      </div>
    </main>
  );
};

export default Layout;
