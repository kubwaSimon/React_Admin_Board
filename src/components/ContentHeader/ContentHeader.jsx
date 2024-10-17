import React from "react";
import { BiSearch ,BiNotification} from "react-icons/bi";
import "./ContentHeader.css";

const ContentHeader = () => {
  return (
    <div className="content-header">
      <h1 className="header-title">DashBoard</h1>
      <div className="header-activity">
        <div className="search">
            <input type="text" placeholder="Enter to search item...."></input>
            <BiSearch className="icon"/>
        </div>

        <div className="notification">
          <BiNotification className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
