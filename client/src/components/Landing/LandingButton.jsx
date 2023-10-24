import Styles from '../../views/Landing/Landing.module.css'
import {Link} from 'react-router-dom'

const LandingButton = () => {
    return(
        <Link className={Styles.button} to={"/home"}>
            <p>Get Started</p>
            </Link>
    )
}

export default LandingButton;