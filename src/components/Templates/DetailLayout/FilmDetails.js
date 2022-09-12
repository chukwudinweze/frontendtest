import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../../Hooks/useFetchDetail";
import CoverPicture from "../../Assets/images/filmsCover.png";
import styles from "./DetailsLayout.module.css";

const FilmDetails = () => {
  const params = useParams();
  // extract id from params
  const { id } = params;
  const { fetchdata, error, detail, loading } = useFetchDetail(
    `https://swapi.dev/api/films/${id}`
  );

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  const { director, producer, release_date, title } = detail;

  if (loading) {
    return <p>Details Loading...</p>;
  }

  if (error) {
    return <p>Something happened, Check Network and refresh</p>;
  }
  return (
    <section className={styles.section}>
      <div>
        <img src={CoverPicture} alt="filmCover" />
      </div>
      <article className={styles.article}>
        <strong>{title}</strong>
        <p>Director:{director}</p>
        <p>Producer:{producer}</p>
        <p>Release Date:{release_date}</p>
      </article>
    </section>
  );
};

export default FilmDetails;
