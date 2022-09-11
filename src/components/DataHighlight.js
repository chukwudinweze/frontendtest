import React from "react";
import HighlightCheckRect from "./HighlightCheckRect";
import NewDataEnteries from "./NewDataEnteries";
import NumberOfEntries from "./NumberOfEntries";
import OverviewTitle from "./OverviewTitle";
import styles from "./dataHighlight.module.css";

const DataHighlight = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <div className={styles.title}>
          <OverviewTitle title="Films" />
          <HighlightCheckRect color="#A9FFE0" />
        </div>
        <div className={styles.entries}>
          <NumberOfEntries totalNumber={200} />
          <NewDataEnteries newEntery={20} />
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.title}>
          <OverviewTitle title="Starships" />
          <HighlightCheckRect color="#A9C1FF" />
        </div>
        <div className={styles.entries}>
          <NumberOfEntries totalNumber={200} />
          <NewDataEnteries newEntery={20} />
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.title}>
          <OverviewTitle title="People" />
          <HighlightCheckRect color="#FFA9EC" />
        </div>
        <div className={styles.entries}>
          <NumberOfEntries totalNumber={200} />
          <NewDataEnteries newEntery={20} />
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.title}>
          <OverviewTitle title="Species" />
          <HighlightCheckRect color="#FDFFA9" />
        </div>
        <div className={styles.entries}>
          <NumberOfEntries totalNumber={200} />
          <NewDataEnteries newEntery={20} />
        </div>
      </article>
    </section>
  );
};

export default DataHighlight;
