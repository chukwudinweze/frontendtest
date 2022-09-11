import React from "react";
import FilmDetails from "../components/FilmDetails";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import styles from "../components/contentDetail.module.css";

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
