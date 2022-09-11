import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import styles from "../components/contentDetail.module.css";
import SpeciesDetails from "../components/SpeciesDetails";

const SpeciesDetail = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sidenav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <Header showArrowBack={true} />
        <div className={styles.details}>
          <SpeciesDetails />
        </div>
      </div>
    </section>
  );
};

export default SpeciesDetail;
