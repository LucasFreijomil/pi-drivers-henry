import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Styles from "./Detail.module.css";

const DriverDetail = () => {
  const { id } = useParams();

  const [driver, setDriver] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
      if (data.name) setDriver(data);
    });
    return setDriver({});
  }, [id]);

  return (
    <div className={Styles.detail}>
      {driver.name ? (
        <>
          <h1>
            {driver.name.forename} {driver.name.surname}{" "}
          </h1>
          <h2>{driver.id}</h2>
          <h2>{driver.nationality}</h2>
          <h2>{driver.teams}</h2>
          <h2>{driver.dob}</h2>
          <p>{driver.description}</p>
          <img src={driver.image.url} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default DriverDetail;
