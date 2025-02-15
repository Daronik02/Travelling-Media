import React from "react";
import "./navbar.css"; // Make sure to create a CSS file if needed

const Navbar = () => {
  return (
    <nav className="Nav">
      <div className="logo">Travelling Media</div>
      <div className="tabs">
        <ul>
          <li className="tab_item">Home</li>
          <li className="tab_item">Blogs</li>
          <li className="tab_item">Nearby Places</li>
          <li className="tab_item">My Bookings</li>
        </ul>
      </div>
      <div className="search-account">
        <div className="search">
          <input type="search" placeholder="Find Your Destination" />
          <button id="searchbtn">Look</button>
        </div>
        <div className="account_info">
          <p>SD</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
