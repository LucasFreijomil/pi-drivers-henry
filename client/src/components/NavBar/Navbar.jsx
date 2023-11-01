import { Link } from "react-router-dom";
import f1_logo from "../../assets/F1-logo.svg.png";
import Styles from "../NavBar/NavBar.module.css";

const NavBar = () => {

  return (
    <div className={Styles.navBar}>
      <Link to={"/home"}>
        <img src={f1_logo} alt="F1" className={Styles.f1_logo} />
      </Link>

      <Link to={"/create"}>
        <button className={Styles.navButton}>Create Driver</button>
      </Link>
    </div>
  );
};

export default NavBar;
