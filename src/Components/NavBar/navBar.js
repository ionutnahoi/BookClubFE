import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Login from "../pages/Login/login";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
const NavBar = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         BookClub
    //       </Typography>
    //       <Button color="inherit" onClick={() => Login()}>
    //         Login
    //       </Button>
    //       <Button color="inherit">Register</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>

    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Register">Register</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default NavBar;
