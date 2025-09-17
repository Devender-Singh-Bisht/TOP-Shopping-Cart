import { Link } from "react-router";
import saleImage from "../assets/sale.png"
import styles from "../styles/HeroSection.module.css"


function HeroSection() {

    return (
        <section className={styles.heroSection}>
            <div className={styles.heading}>Elevate Your Everyday Styles</div>
            <div className={styles.subHeading}>Discover the latest trends in sustainable fashion. </div>
            <div className={styles.subHeading}>Limited stock available.</div>
            <button className={styles.heroBtn}><Link to="shop">Shop Now!</Link></button>

            <div><img src={saleImage} alt="Sale Board Image" className={styles.saleImg} /></div>
        </section>
    );
}

export default HeroSection;