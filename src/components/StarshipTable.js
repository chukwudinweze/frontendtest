import React, { useEffect } from "react";
import styles from "./data__table.module.css";
import useFetchData from "./UseFetchData";
import CheckPointRect from "./CheckPointRect";
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
            <CheckPointRect />
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
            const { name, model, starship_class, passengers, length, url } =
              person;
            return (
              <tr key={index}>
                <td>
                  <CheckPointRect />
                </td>
                <td>{name}</td>
                <td>{model}</td>
                <td>{starship_class}</td>
                <td>{passengers}</td>
                <td>{length}</td>
                <td>{url}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default StarshipTable;
