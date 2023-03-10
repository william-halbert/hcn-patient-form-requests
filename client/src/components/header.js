import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  const [headerClassName, setHeader] = useState("headerPurple");

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="headerLogo" />
      </Link>
    </div>
  );
}

export default Header;
