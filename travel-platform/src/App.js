import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import MissionSection from "./components/MissionSection";
import Stats from "./components/Stats"; // Import Stats Component

function App() {
  return (
    <div>
      <Navbar />
      <MissionSection />
      <Stats /> {/* Display Stats Section */}
      <Footer />
    </div>
  );
}

export default App
