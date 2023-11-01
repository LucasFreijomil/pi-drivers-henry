import Styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, teams }) => {
  return (
    <Link className={Styles.link} to={`/detail/${id}`}>
      <div className={Styles.card}>
        <h1>{name}</h1>
        <h1>{teams}</h1>
        <img className={Styles.cardImage} src={image} alt={name} />
      </div>
    </Link>
  );
};

export default Card;
