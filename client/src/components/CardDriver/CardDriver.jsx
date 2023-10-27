import { useNavigate } from "react-router-dom";
import Styles from "./CardDriver.module.css";

const Card = ({ id, name, image, teams }) => {
  const navigate = useNavigate();
  return (
    <div className={Styles.link} onClick={() => navigate.push(`/detail/${id}`)}>
      <div className={Styles.card}>
        <h1>{name}</h1>
        <h1>{teams}</h1>
        <img className={Styles.cardImage} src={image} alt={name} />
      </div>
    </div>
  );
};

export default Card;
