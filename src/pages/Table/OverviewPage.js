import React, { useContext } from "react";
import Overview from "../../components/Organism/Overview";
import SideNav from "../../components/Organism/SideNav";
import styles from "./Layout.module.css";
import Header from "../../components/Organism/Header";
import NavContext from "../../store/side-context";

const OverviewPage = () => {
  const navCtx = useContext(NavContext);
  return (
    <main className={styles.main}>
      <div
        className={
          navCtx.sideNav ? styles.sideNavPosition : styles.sideNavMobile
        }
      >
        <SideNav />
      </div>
      <div className={styles.formatpage}>
        <Header />
        <div onClick={() => navCtx.hideSideNav()}>
          <Overview />
        </div>
      </div>
    </main>
  );
};

export default OverviewPage;
