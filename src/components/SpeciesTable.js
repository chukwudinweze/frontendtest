import React, { useEffect } from "react";
import { formatDate } from "./formatDate";
import styles from "./data__table.module.css";
import useFetchData from "./UseFetchData";
import CheckPointRect from "./CheckPointRect";
const url = "https://swapi.dev/api/species";

const SpeciesTable = () => {
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
          <th>Name</th>
          <th>Classification</th>
          <th>Eye Colors</th>
          <th>Hair Color</th>
          <th>Height</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((specie, index) => {
            const {
              name,
              classification,
              eye_colors,
              hair_colors,
              average_height,
              created,
            } = specie;

            //   format date
            const releaseDate = formatDate(created);
            return (
              <tr key={index}>
                <td>
                  <CheckPointRect />
                </td>
                <td>{name}</td>
                <td>{classification}</td>
                <td>{eye_colors}</td>
                <td>{hair_colors}</td>
                <td>{average_height}</td>
                <td>{releaseDate}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default SpeciesTable;
