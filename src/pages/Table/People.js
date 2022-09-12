import React from "react";
import SideNav from "../../components/Organism/SideNav";
import styles from "./Layout.module.css";
import PageTitle from "../../components/Atom/Overview/PageTitle";
import PeoplesTable from "../../components/Templates/TableLayouts/PeoplesTable";
import Header from "../../components/Organism/Header";

const People = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sideNavPosition}>
        <SideNav />
      </div>
      <div className={styles.formatpage}>
        <Header />
        <PageTitle title="People" />
        <PeoplesTable />
      </div>
    </main>
  );
};

export default People;
