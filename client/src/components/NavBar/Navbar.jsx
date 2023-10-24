import Styles from "../NavBar/NavBar.module.css";
import f1_logo from "../../assets/F1-logo.svg.png";


const NavBar = () => {
  return (
    <div className={Styles.navBar}>
      <img src={f1_logo} alt="F1" className={Styles.f1_logo} />
      <button className={Styles.navButton}>Home</button>
      <button className={Styles.navButton}>Form</button>
      <div className={Styles.searchContainer}>
      <input type="text" placeholder="Search by name..." className={Styles.searchInput} ></input>
      <button className={Styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default NavBar;
