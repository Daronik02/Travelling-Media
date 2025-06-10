
import React from "react";

const Carousel = () => {
  return (
    <div className="wrapper" style={{ alignItems: "center", justifyContent: "center" }}>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{
          maxWidth: "800px",
          marginLeft: "450px",
          borderRadius: "10px",
          overflow: "hidden"
        }}>
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="/howrahBridge.jpg" className="" alt="Howrah Bridge" style={{ width: "600px", height: "400px" }} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/indiaGate.jpg" className="" alt="India Gate" style={{ width: "600px", height: "400px" }} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/tajmahal.jpg" className="" alt="Tajmahal" style={{ width: "600px", height: "400px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;