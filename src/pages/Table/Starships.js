import React from "react";
import styles from "./Layout.module.css";
import PageTitle from "../../components/Atom/Overview/PageTitle";
import SideNav from "../../components/Organism/SideNav";
import Header from "../../components/Organism/Header";
import StarshipTable from "../../components/Templates/TableLayouts/StarshipTable";

const Starships = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sideNavPosition}>
        <SideNav />
      </div>
      <div className={styles.formatpage}>
        <Header />
        <PageTitle title="Starships" />
        <StarshipTable />
      </div>
    </main>
  );
};

export default Starships;
