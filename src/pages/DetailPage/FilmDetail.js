import React from "react";
import SideNav from "../../components/Organism/SideNav";
import styles from "./DetailPage.module.css";
import FilmDetails from "../../components/Templates/DetailLayout/FilmDetails";
import Header from "../../components/Organism/Header";

const FilmDetail = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sidenav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <Header showArrowBack={true} />
        <div className={styles.details}>
          <FilmDetails />
        </div>
      </div>
    </section>
  );
};

export default FilmDetail;
