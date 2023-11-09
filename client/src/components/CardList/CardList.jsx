import React, { useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Styles from "./CardList.module.css";

const CardList = ({ drivers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 9;

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

  return (
    <div>
      <div className={Styles.CardList}>
        {currentDrivers.map((driver) => (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name.forename}
            teams={driver.teams}
            image={driver.image.url}
          />
        ))}
      </div>
      <Pagination
        driversPerPage={driversPerPage}
        totalDrivers={drivers.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CardList;
