import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import logo from "../Images/logo-grupoB-black.png";

const Nav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div className="navItems">
        <img src={logo} className="ourLogo" alt="groupB-logo"></img>
        <ul
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="nav tabs example"
          className="navText"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Nav;
