import LandingButton from "../../components/Landing/LandingButton";
import Styles from "../Landing/Landing.module.css";

const LandingPage = () => {
  return (
    <div className={Styles.landingPage}>
      <LandingButton />
    </div>
  );
};

export default LandingPage;
