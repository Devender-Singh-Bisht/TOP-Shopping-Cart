import {Link} from "react-router"
import styles from "../styles/Card.module.css"

function Card({text, bgImage}) {

    return (
        <div className={styles.card} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.content}>
                <div className={styles.text}>{text}</div>
                <Link to="shop" className={styles.shopBtns}>Shop Now</Link>
            </div>
        </div>
    );
}

export default Card;