import React from "react";

const MissionSection = () => {
  return (
    <section
      className="mission"
      style={{
        textAlign: "center",
        padding: "50px 20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        className="mission-content"
        style={{
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            color: "#007bff",
          }}
        >
          Our Mission
        </h2>
        <h3
          style={{
            fontSize: "22px",
            marginTop: "10px",
            color: "#333",
          }}
        >
          Connecting Travelers Across India
        </h3>
        <p
          style={{
            fontSize: "16px",
            marginTop: "10px",
            color: "#666",
            lineHeight: "1.5",
          }}
        >
          We aim to create a platform where travelers can share experiences, discover hidden gems, and
          plan their trips seamlessly. Whether you're exploring the Himalayas or relaxing on the beaches of Goa, 
          we bring travel enthusiasts together.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
