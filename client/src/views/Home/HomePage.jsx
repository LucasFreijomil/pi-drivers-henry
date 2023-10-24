import Styles from '../Home/HomePage.module.css'
import CardContainer from '../../components/CardContainer/CardContainer';

const HomePage = ({drivers}) => {
    return(
        <div className={Styles.homePage}>
            <CardContainer drivers={drivers} />
        </div>
    )
}

export default HomePage;