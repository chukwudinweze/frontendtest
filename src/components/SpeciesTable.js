import React, { useEffect } from "react";
import { formatDate } from "./formatDate";
import styles from "./data__table.module.css";
import useFetchData from "./UseFetchData";
import { Link } from "react-router-dom";
import CheckBox from "./CheckBox";
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
            <CheckBox />
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
              id = index + 1,
            } = specie;

            //   format date
            const releaseDate = formatDate(created);
            return (
              <tr key={index}>
                <td>
                  <CheckBox />
                </td>
                <td>
                  <Link to={`/species/${id}`}>{name}</Link>
                </td>
                <td>
                  <Link to={`/species/${id}`}>{classification}</Link>
                </td>
                <td>
                  <Link to={`/species/${id}`}>{eye_colors}</Link>
                </td>
                <td>
                  <Link to={`/species/${id}`}>{hair_colors}</Link>
                </td>
                <td>
                  <Link to={`/species/${id}`}>{average_height}</Link>
                </td>
                <td>
                  <Link to={`/species/${id}`}>{releaseDate}</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default SpeciesTable;
