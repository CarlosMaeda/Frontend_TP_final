import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Elegir opción
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default DropDown;
