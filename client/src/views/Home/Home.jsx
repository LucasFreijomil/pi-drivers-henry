import axios from "axios";
import React, { useEffect, useState } from "react";
import CardDriver from "../../components/CardDriver/CardDriver";
import Pagination from "../../components/Pagination/Pagination";
import Styles from "./Home.module.css";

const Home = () => {
  const [drivers, setDrivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [searchedDriver, setSearchedDriver] = useState("");
  const [birthSort, setBirthSort] = useState("");
  const [nameSort, setNameSort] = useState("");
  const [origin, setOrigin] = useState("");

  const driversPerPage = 9;
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;

  const filteredDrivers =
    origin === "API"
      ? drivers.filter((driver) => driver.id >= 1 && driver.id <= 508)
      : origin === "DB"
      ? drivers.filter((driver) => driver.id >= 509)
      : drivers;

  const currentDrivers = filteredDrivers
    .filter((driver) => !selectedTeam || driver.teams?.includes(selectedTeam))
    .filter((driver) =>
      `${driver.name.forename} ${driver.name.surname}`
        .toLowerCase()
        .includes(searchedDriver.toLowerCase())
    )
    .slice(indexOfFirstDriver, indexOfLastDriver);

  const totalPages = Math.ceil(drivers.length / driversPerPage);

  const fetchAllDrivers = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/drivers`);
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

  const handleDriverSearch = (event) => {
    setSearchedDriver(event.target.value);
  };

  const handleBirthSort = (event) => {
    const selectedValue = event.target.value;
    setBirthSort(selectedValue);

    if (selectedValue === "Ascending") {
      const sortedDrivers = [...drivers].sort(
        (a, b) => new Date(a.dob) - new Date(b.dob)
      );
      setDrivers(sortedDrivers);
    } else if (selectedValue === "Descending") {
      const sortedDrivers = [...drivers].sort(
        (a, b) => new Date(b.dob) - new Date(a.dob)
      );
      setDrivers(sortedDrivers);
    } else if (selectedValue === "") {
      fetchAllDrivers();
    }
  };

  const teamsArray = [...teamSet].sort();

  const handleNameSort = (event) => {
    const selectedValue = event.target.value;
    setNameSort(selectedValue);

    if (selectedValue === "Ascending") {
      const sortedDrivers = drivers.sort((a, b) =>
        `${a.name.forename} ${a.name.surname}`.localeCompare(
          `${b.name.forename} ${b.name.surname}`
        )
      );
      setDrivers(sortedDrivers);
    } else if (selectedValue === "Descending") {
      const sortedDrivers = drivers.sort((a, b) =>
        `${b.name.forename} ${b.name.surname}`.localeCompare(
          `${a.name.forename} ${a.name.surname}`
        )
      );
      setDrivers(sortedDrivers);
    } else if (selectedValue === "") {
      fetchAllDrivers();
    }
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  return (
    <div>
      <div className={Styles.searchFilters}>
        <select name="" id="" onChange={handleTeamChange} value={selectedTeam}>
          <option value="">All Teams</option>
          {teamsArray.map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option>
          ))}
        </select>

        <select name="" id="" onChange={handleNameSort} value={nameSort}>
          <option value="">Sort By Name (default)</option>
          <option value="Ascending">A - Z</option>
          <option value="Descending">Z - A</option>
        </select>

        <select name="" id="" onChange={handleBirthSort} value={birthSort}>
          <option value="">Date Of Birth (default)</option>
          <option value="Ascending">Oldest First</option>
          <option value="Descending">Newest First</option>
        </select>

        <select name="" id="" onChange={handleOriginChange} value={origin}>
          <option value="">Show All (API/DB)</option>
          <option value="API">API</option>
          <option value="DB">Database</option>
        </select>

        <div className={Styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by name..."
            className={Styles.searchInput}
            onChange={handleDriverSearch}
          />
        </div>
      </div>
      <div className={Styles.CardList}>
        {currentDrivers.map((driver) => (
          <CardDriver
            key={driver.id}
            id={driver.id}
            name={driver.name.forename}
            surname={driver.name.surname}
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
