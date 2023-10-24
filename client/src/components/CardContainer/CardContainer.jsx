import Card from "../Card/Card";
import Styles from './CardContainer.module.css'

const CardContainer = ({drivers}) => {
  return (
    <div className={Styles.cardContainer}>
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

export default CardContainer;
