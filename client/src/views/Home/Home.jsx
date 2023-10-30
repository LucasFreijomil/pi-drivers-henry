import axios from "axios";
import React, { useEffect, useState } from "react";
import CardDriver from "../../components/CardDriver/CardDriver";
import Pagination from "../../components/Pagination/Pagination";
import Styles from "./Home.module.css";

const Home = () => {
  const [drivers, setDrivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState("");
  const driversPerPage = 9;

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = drivers
    .filter((driver) => !selectedTeam || driver.teams?.includes(selectedTeam))
    .slice(indexOfFirstDriver, indexOfLastDriver);
  const totalPages = Math.ceil(drivers.length / driversPerPage);

  // const onSearch = async (id) => {
  //   try {
  //     const { data } = await axios.get(`http://localhost:5000/drivers/${id}`);

  //     if (data.name) {
  //       setDrivers([data]);
  //     } else {
  //       window.alert("¡No hay pilotos con este ID!");
  //     }
  //   } catch (error) {
  //     console.error("Error al buscar el piloto:", error);
  //   }
  // };

  const fetchAllDrivers = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/drivers`);
      setDrivers(data);
    } catch (error) {
      console.error("Error al obtener todos los pilotos:", error);
    }
  };

  useEffect(() => {
    fetchAllDrivers();
  }, []);

  const teamSet = new Set();

  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].teams) {
      let teamDriver = drivers[i].teams.split(",");
      for (let j = 0; j < teamDriver.length; j++) {
        teamSet.add(teamDriver[j].trim());
      }
    }
  }

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const teamsArray = [...teamSet].sort();

  return (
    <div>
      <select name="" id="" onChange={handleTeamChange} value={selectedTeam}>
        <option value="">All</option>
        {teamsArray.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
      <div className={Styles.CardList}>
        {currentDrivers.map((driver) => (
          <CardDriver
            key={driver.id}
            id={driver.id}
            name={driver.name.forename}
            teams={driver.teams}
            image={driver.image.url}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
