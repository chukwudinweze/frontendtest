import React, { useEffect } from "react";
import { formatDate } from "./formatDate";
import styles from "./data__table.module.css";
import useFetchData from "./UseFetchData";
import CheckPointRect from "./CheckPointRect";
const url = "https://swapi.dev/api/people";
const PeoplesTable = () => {
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

          <th>Birth Year</th>
          <th>Gender</th>
          <th>Hair Color</th>
          <th>Height</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((person, index) => {
            const { name, birth_year, gender, hair_color, height, created } =
              person;

            //   format date
            const releaseDate = formatDate(created);
            return (
              <tr key={index}>
                <td>
                  <CheckPointRect />
                </td>
                <td>{name}</td>
                <td>{birth_year}</td>
                <td>{gender}</td>
                <td>{hair_color}</td>
                <td>{height}</td>
                <td>{releaseDate}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PeoplesTable;
