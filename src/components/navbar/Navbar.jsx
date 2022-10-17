import { AppBar, Avatar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <AppBar className="nav" sx={{ bgcolor: "#000" }}>
      <Toolbar>
        <img
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt="Netflix logo"
          className="nav__logo"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
