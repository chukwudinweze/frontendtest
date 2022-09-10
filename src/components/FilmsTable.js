import React, { useEffect } from "react";
import { formatDate } from "./formatDate";
import styles from "./data__table.module.css";
import useFetchData from "./UseFetchData";
import CheckPointRect from "./CheckPointRect";
const url = "https://swapi.dev/api/films";
const FilmsTable = () => {
  const { fetchData, response } = useFetchData(url);
  const { error, loading, result } = response;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(response);

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
            <CheckPointRect />
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
          result.map((contact, index) => {
            const {
              title,
              release_date,
              director,
              producer,
              episode_id,
              characters,
            } = contact;

            //   format date
            const releaseDate = formatDate(release_date);
            return (
              <tr key={index}>
                <td>
                  <CheckPointRect />
                </td>
                <td>{title}</td>
                <td>{releaseDate}</td>
                <td>{director}</td>
                <td>{producer}</td>
                <td>{episode_id}</td>
                <td>{characters[0]}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default FilmsTable;
