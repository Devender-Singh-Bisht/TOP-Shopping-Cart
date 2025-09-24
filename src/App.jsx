import { useState } from 'react'
import { Link } from 'react-router';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import styles from './App.module.css';
import menFashion from "./assets/menfashion.jpg";
import womenFashion from "./assets/womenfashion.jpg";
import kidsFashion from "./assets/kidsfashion.jpg";


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />

      <section className={styles.cardsSection}>
        <div className={styles.text}>Fashion:</div>
        <div className={styles.cards}>
          <Card text="Men's Fashion" bgImage={menFashion} />
          <Card text="Women's Fashion" bgImage={womenFashion} />
          <Card text="Kid's Fashion" bgImage={kidsFashion} />
        </div>
      </section>

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
    </>
  )
}

export default App
