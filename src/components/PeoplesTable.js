import React, { useEffect } from "react";
import { formatDate } from "./formatDate";
import styles from "./data__table.module.css";
import useFetchData from "./UseFetchData";
import CheckPointRect from "./CheckPointRect";
import { Link } from "react-router-dom";
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
            const {
              name,
              birth_year,
              gender,
              hair_color,
              height,
              created,
              id = index + 1,
            } = person;

            //   format date
            const releaseDate = formatDate(created);
            return (
              <tr key={index}>
                <td>
                  <CheckPointRect />
                </td>

                <td>
                  <Link to={`/people/${id}`}>{name}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{birth_year}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{gender}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{hair_color}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{height}</Link>
                </td>
                <td>
                  <Link to={`/people/${id}`}>{releaseDate}</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PeoplesTable;
