import React from "react";
import DataHighlight from "./DataHighlight";
import FilmsTable from "./FilmsTable";
import styles from "./Overview.module.css";
import PageTitle from "./PageTitle";

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
