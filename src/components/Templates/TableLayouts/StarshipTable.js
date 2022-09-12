import React, { useEffect } from "react";
import styles from "./TableLayout.module.css";
import useFetchData from "../../Hooks/UseFetchData";
import { Link } from "react-router-dom";
import CheckBox from "../../Atom/Table/CheckBox";
const url = "https://swapi.dev/api/starships";

const StarshipTable = () => {
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
          <th>Model</th>
          <th>Class</th>
          <th>Passenger Color</th>
          <th>Length</th>
          <th>Characted</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((person, index) => {
            const {
              name,
              model,
              starship_class,
              passengers,
              length,
              url,
              id = index + 2,
            } = person;
            return (
              <tr key={index}>
                <td>
                  <CheckBox />
                </td>
                <td>
                  <Link to={`/people/${id}`}>{name}</Link>
                </td>
                <td>
                  <Link to={`/starships/${id}`}>{model}</Link>
                </td>
                <td>
                  <Link to={`/starships/${id}`}>{starship_class}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{passengers}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{length}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{url}</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default StarshipTable;
