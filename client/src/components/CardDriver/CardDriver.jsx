import { useNavigate } from "react-router-dom";
import Styles from "./CardDriver.module.css";

const Card = ({ id, name, surname, image, teams }) => {
  const navigate = useNavigate();
  return (
    <div className={Styles.link} onClick={() => navigate(`/detail/${id}`)}>
      <div className={Styles.card}>
        <h1>{name} {surname}</h1>
        <br />
        <h3>{teams}</h3>
        <img className={Styles.cardImage} src={image} alt={name} />
      </div>
    </div>
  );
};

export default Card;
