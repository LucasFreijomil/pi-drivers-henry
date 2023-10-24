import Styles from "../NavBar/NavBar.module.css";
import f1_logo from "../../assets/F1-logo.svg.png";
import { useState } from 'react';


const NavBar = ({ onSearch }) => {
  const [id, setId] = useState("")

  const handleChange = (event) => {
    const { value } = event.target;
    setId(value)
  }

  return (
    <div className={Styles.navBar}>
      <img src={f1_logo} alt="F1" className={Styles.f1_logo} />
      <button className={Styles.navButton}>Home</button>
      <button className={Styles.navButton}>Form</button>

      <div className={Styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name..."
          className={Styles.searchInput}
          onChange={handleChange} value={id}>
        </input>
        <button onClick={() => {onSearch(id); setId('')}} className={Styles.searchButton}>Search</button>
      </div>

      <button className={Styles.showAllButton}>Show All</button>
    </div>
  );
};

export default NavBar;
