import Styles from "./Card.module.css";

const Card = ({ id, name, image, teams }) => {
  return (
    <div className={Styles.card}>
      <h1>{name}</h1>
      <h1>{teams}</h1>
      <img className={Styles.cardImage} src={image} alt={name} />
    </div>
  );
};

export default Card;
