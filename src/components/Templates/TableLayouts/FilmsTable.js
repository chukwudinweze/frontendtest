import React, { useEffect } from "react";
import { formatDate } from "../../HelperFunctions/formatDate";
import styles from "./TableLayout.module.css";
import useFetchData from "../../Hooks/UseFetchData";
import { Link } from "react-router-dom";
import CheckBox from "../../Atom/Table/CheckBox";

const url = "https://swapi.dev/api/films";
const FilmsTable = () => {
  // fetch data
  const { fetchData, response } = useFetchData(url);
  const { error, loading, result } = response;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Something happened, refresh and try again shortly</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <CheckBox />
          </th>
          <th>Film Title</th>
          <th>Release Date</th>
          <th>Director</th>
          <th>Producer</th>
          <th>Episode ID</th>
          <th>Character</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((film, index) => {
            const {
              title,
              release_date,
              director,
              producer,
              episode_id,
              characters,
              id = index + 1,
            } = film;

            //   format date
            const releaseDate = formatDate(release_date);
            return (
              <tr key={index}>
                <td>
                  <CheckBox />
                </td>
                <td>
                  <Link to={`/films/${id}`}>{title}</Link>
                </td>
                <td>
                  <Link to={`/films/${id}`}>{releaseDate}</Link>
                </td>
                <td>
                  <Link to={`/films/${id}`}>{director}</Link>
                </td>
                <td>
                  <Link to={`/films/${id}`}>{producer}</Link>
                </td>
                <td>
                  <Link to={`/films/${id}`}>{episode_id}</Link>
                </td>
                <td>
                  <Link to={`/films/${id}`}>{characters[0]}</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default FilmsTable;
