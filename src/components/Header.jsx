import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import profileIcon from "../assets/profile-placeholder.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <img
        src={logo}
        alt="Logo"
        className="h-10 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <img
        src={profileIcon}
        alt="Profile"
        className="h-10 cursor-pointer"
        onClick={() => navigate("/profile")}
      />
    </header>
  );
};

export default Header;
