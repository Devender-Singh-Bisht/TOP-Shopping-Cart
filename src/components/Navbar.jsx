import { useState } from "react";
import {Link} from "react-router"
import styles from "../styles/Navbar.module.css"
import cartImage from "../assets/cart.png"

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        toggle?setToggle(false):setToggle(true)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>AuraKart</div>

            <button className={styles.toggleButton} onClick={handleToggle} >
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="rgba(255, 255, 255, 1)"><path d="M120-693.33V-760h720v66.67H120ZM120-200v-66.67h720V-200H120Zm0-246.67v-66.66h720v66.66H120Z"/></svg>
            </button>

            <ul className={`${styles.smallNav} ${!toggle&&styles.hide}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>

            <ul className={styles.normalNav}>
                <li><Link to="/" className={styles.normalLinkHover}>Home</Link></li>
                <li><Link to="/shop" className={styles.normalLinkHover}>Shop</Link></li>
                <li >
                    <Link to="/cart">
                        <img className={styles.cartImg} src={cartImage} alt="Cart" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;