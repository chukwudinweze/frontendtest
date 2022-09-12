import React from "react";
import Overview from "../../components/Organism/Overview";
import SideNav from "../../components/Organism/SideNav";
import styles from "./Layout.module.css";
import Header from "../../components/Organism/Header";

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
