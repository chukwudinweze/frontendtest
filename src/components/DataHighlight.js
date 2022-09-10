import React from "react";
import HighlightCheckRect from "./HighlightCheckRect";
import NewDataEnteries from "./NewDataEnteries";
import NumberOfEntries from "./NumberOfEntries";
import OverviewTitle from "./OverviewTitle";
import styles from "./dataHighlight.module.css";
// import OverviewTitle from "./overviewTitle";

const DataHighlight = () => {
  return (
    <article className={styles.article}>
      <div className={styles.title}>
        <OverviewTitle title="Films" />
        <HighlightCheckRect />
      </div>
      <div className={styles.entries}>
        <NumberOfEntries />
        <NewDataEnteries />
      </div>
    </article>
  );
};

export default DataHighlight;
