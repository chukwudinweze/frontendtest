import React from "react";
import Header from "../components/Header";
import Overview from "../components/Overview";
import SideNav from "../components/SideNav";
import styles from "../components/Layout.module.css";

const OverviewPage = () => {
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

export default OverviewPage;
