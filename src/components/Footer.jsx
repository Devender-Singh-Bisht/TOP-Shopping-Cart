import { Link } from 'react-router';
import styles from '../styles/Footer.module.css'

function Footer() {

    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.links}>
                    <div className={styles.linksHeader}>Links:</div>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="shop" className={styles.link}>Shop</Link>
                    <Link to="cart" className={styles.link}>Cart</Link>
                </div>
                <div className={styles.contact}><span>Contact Us:</span> xxxxxxxxxx</div>
            </div>

            <div className={styles.copyrightText}>&copy; 2025 My Awesome Website. All Rights Reserved </div>
        </footer>
    );
}

export default Footer;