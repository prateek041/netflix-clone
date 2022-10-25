import { AppBar, Toolbar, Grid, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true); // show navbar if on top.
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  });
  return (
    <AppBar
      className="nav"
      sx={{ bgcolor: show ? "#000" : "#fff" }}
      elevation={0}
      //   position="static"
    >
      <Toolbar>
        <img
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt="Netflix logo"
          className="nav__logo"
          component="div"
          sx={{ flexGrow: 1 }}
        />
        <Grid container justifyContent="flex-end">
          {/* <Stack direction="row" spacing={2}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Stack> */}
          <Avatar
            alt="Netflix profile avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            variant="square"
          />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
