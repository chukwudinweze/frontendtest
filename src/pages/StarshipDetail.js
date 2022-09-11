import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import styles from "../components/contentDetail.module.css";
import StarshipDetails from "../components/StarshipDetails";

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
