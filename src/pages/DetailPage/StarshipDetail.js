import React from "react";
import SideNav from "../../components/Organism/SideNav";
import styles from "./DetailPage.module.css";
import StarshipDetails from "../../components/Templates/DetailLayout/StarshipDetails";
import Header from "../../components/Organism/Header";

const StarshipDetail = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sidenav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <Header showArrowBack={true} />
        <div className={styles.details}>
          <StarshipDetails />
        </div>
      </div>
    </section>
  );
};

export default StarshipDetail;
