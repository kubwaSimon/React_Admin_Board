import React from "react";
import userImg from "../../assets/images.jpeg";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import { BiBook } from "react-icons/bi";

const stacks = [
  {
    title: "FRONT-END",
    duration: "6 Years",
    icon: <BiBook />,
  },
  {
    title: "REACT",
    duration: "6 Years",
    icon: <BiBook />,
  },
  
];

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="d-profile">
        <div className="d-detail">
          <img src={userImg} alt="" />
          <h3 className="username">Elaine Grant</h3>
          <span className="profession">React Developer</span>
        </div>
        <div className="dev-stacks">
          {stacks.map((stacks) => (
            <div className="stack">
              <div className="stack-detail">
                <div className="stack-cover">{stacks.icon}</div>
                <div className="stack-name">
                  <h5 className="title">{stacks.title}</h5>
                  <span className="duration">{stacks.duration}</span>
                </div>
              </div>
              <div className="action">
                :
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
