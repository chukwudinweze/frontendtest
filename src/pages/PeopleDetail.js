import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import styles from "../components/contentDetail.module.css";
import PeopleDetails from "../components/PeopleDetails";

const PeopleDetail = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sidenav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <Header showArrowBack={true} />
        <div className={styles.details}>
          <PeopleDetails />
        </div>
      </div>
    </section>
  );
};

export default PeopleDetail;
