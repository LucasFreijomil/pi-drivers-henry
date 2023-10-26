import Styles from "../NavBar/NavBar.module.css";
import f1_logo from "../../assets/F1-logo.svg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch, showAll }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };

  return (
    <div className={Styles.navBar}>

      <Link to={"/home"}>
        <img src={f1_logo} alt="F1" className={Styles.f1_logo} />

      </Link>

      <Link to={"/create"}>
        <button className={Styles.navButton}>Create Driver</button>
      </Link>

      <div className={Styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name..."
          className={Styles.searchInput}
          onChange={handleChange}
          value={id} ></input>
        <button onClick={() => {onSearch(id); setId("");}} className={Styles.searchButton}> Search</button>
      </div>

      <button className={Styles.showAllButton} onClick={showAll}>Show All</button>
    </div>
  );
};

export default NavBar;
