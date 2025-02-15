import React from "react";
import { Map, Users, Globe } from "lucide-react"; // Import icons
import "./Stats.css"; // Import CSS

const statsData = [
  { icon: <Map className="stat-icon" />, number: "50,000+", text: "Trips Planned" },
  { icon: <Users className="stat-icon" />, number: "200,000+", text: "Travelers Connected" },
  { icon: <Globe className="stat-icon" />, number: "10,000+", text: "Destinations Explored" },
];

const Stats = () => {
  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-box">
          {stat.icon}
          <div className="stat-number">{stat.number}</div>
          <div className="stat-text">{stat.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
