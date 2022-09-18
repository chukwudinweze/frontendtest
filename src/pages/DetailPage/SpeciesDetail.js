import React, { useContext } from "react";
import SideNav from "../../components/Organism/SideNav";
import styles from "./DetailPage.module.css";
import SpeciesDetails from "../../components/Templates/DetailLayout/SpeciesDetails";
import Header from "../../components/Organism/Header";
import NavContext from "../../store/side-context";

const SpeciesDetail = () => {
  const navCtx = useContext(NavContext);
  return (
    <section className={styles.section}>
      <div className={styles.sidenav}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <Header showArrowBack={true} />
        <div className={styles.details} onClick={() => navCtx.hideSideNav()}>
          <SpeciesDetails />
        </div>
      </div>
    </section>
  );
};

export default SpeciesDetail;
