import React from "react";
import { useState } from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { Avatar } from "@mui/material";
import { NavDropdown } from "react-bootstrap";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "bootstrap";
import { FaLongArrowAltUp } from "react-icons/fa";
const NavBarLogged = () => {
  function Logout() {}
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/MainPage">Home</NavLink>
          <NavLink to="/Addbook">Add book</NavLink>
          <NavLink to="/Borrowedbooks">Borrowed Books</NavLink>
          <NavLink to="/Availablebooks">Available Books</NavLink>
        </NavMenu>
        {/* <Avatar>H</Avatar> */}
      </Nav>
    </>
  );
};
export default NavBarLogged;
