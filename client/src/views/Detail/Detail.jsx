import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [drivers, setDrivers] = useState({});

  useEffect(() => {
    axios(`http://localhost:5000/drivers/${id}`).then(({ data }) => {
      if (data.name) {
        setDrivers(data);
      } else {
        window.alert("No hay pilotos con ese ID");
      }
    });
    return setDrivers({});
  }, [id]);

  return (
    <div className={Styles.detail}>
      {drivers.name ? (
        <>
          <h1>
            {drivers.name.forename} {drivers.name.surname}{" "}
          </h1>
          <h2>{drivers.id}</h2>
          <h2>{drivers.nationality}</h2>
          <h2>{drivers.teams}</h2>
          <h2>{drivers.dob}</h2>
          <p>{drivers.description}</p>
          <img src={drivers.image.url} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
