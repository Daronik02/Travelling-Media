import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Navbar from './assets/component/Navbar.jsx'
import Carousel from "./assets/component/Carousel.jsx";


const App =()=>{
  return(
  <>
  <Navbar/>
  <Carousel/>
  </>
  )
}

export default App;