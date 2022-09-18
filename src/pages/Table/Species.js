import React, { useContext } from "react";
import styles from "./Layout.module.css";
import PageTitle from "../../components/Atom/Overview/PageTitle";
import SideNav from "../../components/Organism/SideNav";
import Header from "../../components/Organism/Header";
import SpeciesTable from "../../components/Templates/TableLayouts/SpeciesTable";
import NavContext from "../../store/side-context";

const Species = () => {
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
          <PageTitle title="Species" />
          <SpeciesTable />
        </div>
      </div>
    </main>
  );
};

export default Species;
