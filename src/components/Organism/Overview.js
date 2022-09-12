import React from "react";
import DataHighlight from "../Molecule/DataHighlight";
import styles from "./Overview.module.css";
import PageTitle from "../Atom/Overview/PageTitle";
import FilmsTable from "../Templates/TableLayouts/FilmsTable";

const Overview = () => {
  return (
    <section className={styles.section}>
      <DataHighlight />
      <PageTitle title="films" />
      <FilmsTable />
    </section>
  );
};

export default Overview;
