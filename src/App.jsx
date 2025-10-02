import { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  const [cart, setCart] = useState({});

  return (
    <>
      <Navbar />
      <Outlet context={[cart, setCart]}/>
      <Footer/>
    </>
  )
}

export default App
