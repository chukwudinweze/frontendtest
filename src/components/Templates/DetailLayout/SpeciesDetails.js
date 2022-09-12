import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../../Hooks/useFetchDetail";
import CoverPicture from "../../Assets/images/speciesCover.png";
import styles from "./DetailsLayout.module.css";

const SpeciesDetails = () => {
  const params = useParams();
  // extract id from params
  const { id } = params;
  const { fetchdata, error, detail, loading } = useFetchDetail(
    `https://swapi.dev/api/species/${id}`
  );

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  const { designation, language, eye_colors, average_lifespan, name } = detail;

  if (loading) {
    return <p>Details Loading...</p>;
  }

  if (error) {
    return <p>Something happened, Check Network and refresh</p>;
  }
  return (
    <section className={styles.section}>
      <div>
        <img src={CoverPicture} alt="Species cover" />
      </div>
      <article className={styles.article}>
        <strong>{name}</strong>
        <p>Designation:{designation}</p>
        <p>Language:{language}</p>
        <p>Eye Colors:{eye_colors}</p>
        <p>Average Lifespan:{average_lifespan}</p>
      </article>
    </section>
  );
};

export default SpeciesDetails;
