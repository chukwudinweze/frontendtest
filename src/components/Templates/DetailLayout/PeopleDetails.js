import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../../Hooks/useFetchDetail";
import CoverPicture from "../../Assets/images/peopleCover.png";
import styles from "./DetailsLayout.module.css";

const PeopleDetails = () => {
  const params = useParams();
  // extract id from params
  const { id } = params;
  const { fetchdata, error, detail, loading } = useFetchDetail(
    `https://swapi.dev/api/people/${id}`
  );

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  const { gender, birth_year, skin_color, height, name } = detail;

  if (loading) {
    return <p>Details Loading...</p>;
  }

  if (error) {
    return <p>Something happened, Check Network and refresh</p>;
  }
  return (
    <section className={styles.section}>
      <div>
        <img src={CoverPicture} alt="People Cover" />
      </div>
      <article className={styles.article}>
        <strong>{name}</strong>
        <p>Gender: {gender}</p>
        <p>Year of birth: {birth_year}</p>
        <p>Skin Color: {skin_color}</p>
        <p>Height: {height}</p>
      </article>
    </section>
  );
};

export default PeopleDetails;
