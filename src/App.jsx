import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Navbar from "./assets/component/Navbar.jsx";
import Carousel from "./assets/component/Carousel.jsx";
import Counterblocks from "./assets/component/Counterblocks.jsx";

const App =()=>{
  return(
  <>
  <Navbar/>
  <Carousel/>
  <Counterblocks/>
  </>
  )
}

export default App;