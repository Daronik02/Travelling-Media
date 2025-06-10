import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/component/Navbar.jsx";
import Carousel from "./assets/component/Carousel.jsx";
import Counterblocks from "./assets/component/Counterblocks.jsx";
import MissionSection from "./assets/component/MissionSectio.jsx";
import BlogPage from "./assets/component/BlogPage.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Counterblocks />
            <MissionSection />
          </>
        } />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
