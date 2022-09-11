import React from "react";
import Header from "../components/Header";
import styles from "../components/Layout.module.css";
import PageTitle from "../components/PageTitle";
import SideNav from "../components/SideNav";
import SpeciesTable from "../components/SpeciesTable";

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
