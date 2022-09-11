import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import styles from "../components/Layout.module.css";
import PeoplesTable from "../components/PeoplesTable";
import PageTitle from "../components/PageTitle";

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
