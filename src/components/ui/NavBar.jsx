import React, { useState } from "react";
import { Link } from "react-router-dom";
import dropDown from "../../assets/dropDown.svg";
import DropDown from "./DropDown";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="box-border flex items-center justify-between w-full p-5 text-white bg-gray-800 bg-secondary">
      <div>
        <Link
          to="/"
          className="text-2xl font-bold transition-colors text-primary hover:text-gray-300 font-main"
        >
          WhereTo
        </Link>
      </div>
      <ul className="relative flex gap-4"> {/* relative for positioning dropdown */}
        <li onClick={toggleDropdown}>
          <img
            src={dropDown}
            alt="Dropdown Icon"
            className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-80"
          />
          {isDropdownOpen && <DropDown />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;



