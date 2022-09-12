import React from "react";
import SideNav from "../../components/Organism/SideNav";
import styles from "./DetailPage.module.css";
import SpeciesDetails from "../../components/Templates/DetailLayout/SpeciesDetails";
import Header from "../../components/Organism/Header";

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
