import Styles from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={Styles.landingPage}>
      <Link className={Styles.button} to={"/home"}>
        <p>Get Started</p>
      </Link>
    </div>
  );
};

export default Landing;
