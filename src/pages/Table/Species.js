import React from "react";
import styles from "./Layout.module.css";
import PageTitle from "../../components/Atom/Overview/PageTitle";
import SideNav from "../../components/Organism/SideNav";
import Header from "../../components/Organism/Header";
import SpeciesTable from "../../components/Templates/TableLayouts/SpeciesTable";

const Species = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sideNavPosition}>
        <SideNav />
      </div>
      <div className={styles.formatpage}>
        <Header />
        <PageTitle title="Species" />
        <SpeciesTable />
      </div>
    </main>
  );
};

export default Species;
