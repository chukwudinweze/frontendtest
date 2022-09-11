import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "./useFetchDetail";
import CoverPicture from "../images/starshipsCover.png";
import styles from "./FilmDetails.module.css";

const StarshipDetails = () => {
  const params = useParams();

  // extract id from params
  const { id } = params;
  const { fetchdata, error, detail, loading } = useFetchDetail(
    `https://swapi.dev/api/starships/${id}`
  );

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  const { model, passengers, pilots, name } = detail;

  if (loading) {
    return <p>Details Loading...</p>;
  }

  if (error) {
    return <p>Something happened, Check Network and refresh</p>;
  }
  return (
    <section className={styles.section}>
      <div>
        <img src={CoverPicture} alt="Starship Cover" />
      </div>
      <article className={styles.article}>
        <strong>{name}</strong>
        <p>Model:{model}</p>
        <p>Passengers:{passengers}</p>
        <p>
          Pilots:{pilots && pilots.map((pilot) => <p key={pilot}>pilot</p>)}
        </p>
      </article>
    </section>
  );
};

export default StarshipDetails;
