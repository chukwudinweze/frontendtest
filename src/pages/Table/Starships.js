import React, { useContext } from "react";
import styles from "./Layout.module.css";
import PageTitle from "../../components/Atom/Overview/PageTitle";
import SideNav from "../../components/Organism/SideNav";
import Header from "../../components/Organism/Header";
import StarshipTable from "../../components/Templates/TableLayouts/StarshipTable";
import NavContext from "../../store/side-context";

const Starships = () => {
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
          <PageTitle title="Starships" />
          <StarshipTable />
        </div>
      </div>
    </main>
  );
};

export default Starships;
