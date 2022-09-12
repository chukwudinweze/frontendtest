import React from "react";
import SideNav from "../../components/Organism/SideNav";
import styles from "./DetailPage.module.css";
import PeopleDetails from "../../components/Templates/DetailLayout/PeopleDetails";
import Header from "../../components/Organism/Header";

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
