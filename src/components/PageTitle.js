import React from "react";
import style from "./PageTitle";

const PageTitle = ({ title }) => {
  return <p className={style.p}>{title}</p>;
};

export default PageTitle;
