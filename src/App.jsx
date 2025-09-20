import { useState } from 'react'
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
    </>
  )
}

export default App
