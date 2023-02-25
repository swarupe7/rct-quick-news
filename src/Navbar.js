import React, { useState } from "react";
import "./navbar.css";


import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>Q</span>uick
            <span>N</span>ews
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" style={{fontFamily:'Bungee'}}>This Site Helps You In Grabing News Really Quick...</NavLink>
            </li>
           
          </ul>
        </div>

        
      </nav>

     
    </>
  );
};

export default Navbar;