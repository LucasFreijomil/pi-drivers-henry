import Card from "../Card/Card";
import Styles from "./CardList.module.css";

const CardList = ({ drivers }) => {
  return (
    <div className={Styles.CardList}>
      {drivers.map((driver) => {
        return (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name.forename}
            teams={driver.teams}
            image={driver.image.url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
