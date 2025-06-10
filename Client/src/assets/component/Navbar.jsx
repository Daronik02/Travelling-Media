import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaSearch, FaQuestionCircle, FaUserCircle, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

<Link to="/blog" className="nav-link">Blog</Link>


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <nav className="flex bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-indigo px-6 py-2 shadow-md items-center justify-between">
      {/* Left - Logo */}
      <div className="basis-[20%] flex items-center justify-start">
        <div className="text-4xl font-calligraphy">Travelling Media</div>
      </div>

      {/* Center - Tabs */}
      <div className="basis-[50%] flex items-center justify-center gap-6 text-md font-medium">
        <button className="hover:underline">HOME</button>
        <button className="hover:underline"><Link to="/blog" className="nav-link">Blog</Link></button>
        <button className="hover:underline">My-journey</button>
        <button className="hover:underline">Nearby's</button>
      </div>

      {/* Right - Actions */}
      <div className="basis-[30%] flex items-center justify-end space-x-9">
        {/* 🌗 Theme Toggle Button */}
        <button onClick={toggleTheme} className="bg-white text-indigo-500 w-10 h-10 flex items-center justify-center rounded-full text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="px-3 py-1 pr-8 rounded-md text-black focus:outline-none"
          />
          {searchText && (
            <button
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white-500"
            >
              <FaTimes />
            </button>
          )}
        </div>

        <button className="bg-white text-indigo-500 w-10 h-10 flex items-center justify-center rounded-full text-xl">
          <FaSearch />
        </button>
        <button className="bg-white text-indigo-500 w-10 h-10 flex items-center justify-center rounded-full text-xl">
          <FaQuestionCircle />
        </button>
        <button className="bg-white text-indigo-500 w-10 h-10 flex items-center justify-center rounded-full text-xl">
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
