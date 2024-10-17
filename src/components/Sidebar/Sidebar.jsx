import React, { useState } from "react";
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
  BiMenu,
} from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <div className="menu">
      <div className="top">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>BandKE</h2>
      </div>
      
      <div className={`menu-bar ${isOpen && "open"}`} 
      onClick={()=>SetIsOpen(isOpen)}>
        <BiMenu />
      </div>
</div>

      <div className={`menu-list ${isOpen && "open"}`}>
        <a href="#" className="item active">
          <BiHome className="bi-icon" />
          DashBoard
        </a>

        <a href="#" className="item">
          <BiTask className="bi-icon" />
          Tasks
        </a>
        <a href="#" className="item">
          <BiSolidReport className="bi-icon" />
          Report
        </a>

        <a href="#" className="item">
          <BiStats className="bi-icon" />
          Statistics
        </a>

        <a href="#" className="item">
          <BiMessage className="bi-icon" />
          Send us Message
        </a>
        <a href="#" className="item">
          <BiHelpCircle className="bi-icon" />
          Help
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
