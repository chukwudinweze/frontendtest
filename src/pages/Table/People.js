import React, { useContext } from "react";
import SideNav from "../../components/Organism/SideNav";
import styles from "./Layout.module.css";
import PageTitle from "../../components/Atom/Overview/PageTitle";
import PeoplesTable from "../../components/Templates/TableLayouts/PeoplesTable";
import Header from "../../components/Organism/Header";
import NavContext from "../../store/side-context";

const People = () => {
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
          <PageTitle title="People" />
          <PeoplesTable />
        </div>
      </div>
    </main>
  );
};

export default People;
