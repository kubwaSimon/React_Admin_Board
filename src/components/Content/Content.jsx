import React from "react";
import "./Content.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import Card from "../Card/Card";
import Developers from "../Developers/Developers";

const Content = () => {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
      <Developers />
    </div>
  );
};

export default Content;
