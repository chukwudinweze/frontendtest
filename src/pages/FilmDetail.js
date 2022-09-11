import React from "react";
import { useParams } from "react-router-dom";

const FilmDetail = () => {
  const params = useParams();
  console.log(params);
  return <div>Hello from FilmDetail</div>;
};

export default FilmDetail;
