import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import BookIcon from "@mui/icons-material/Book";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
export default function MenuAppBar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navItems = ["Home", "Add Book", "All books", "Available Books"];

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (click) => {
    setAnchorEl(null);
    console.log(click);
    if (click === "borrowed") {
      window.location.assign("/Borrowedbooks");
    } else if (click === "logout") {
      window.localStorage.clear();
      window.location.assign("/");
    } else if (click === "waiting") {
      window.location.assign("/WaitingList");
    } else if (click === "mybooks") {
      window.location.assign("/MyBooks");
    }
  };
  const returnMain = () => {
    window.location.href("/MainPage");
  };
  const handleClick = (click) => {
    console.log(click);
    if (click === "Add Book") {
      window.location.assign("/Addbook");
    } else if (click === "Available Books") {
      window.location.assign("/Availablebooks");
    } else if (click === "Home") {
      window.location.assign("/MainPage");
    } else if (click === "All books") {
      window.location.assign("/AllBooks");
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BookIcon />
          <Typography
            variant="h6"
            component="a"
            href="/MainPage"
            noWrap
            sx={{
              flexGrow: 1,
              mr: 2,
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Book Club
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => handleClick(item)}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClose("borrowed")}>
                  Borrowed Books
                </MenuItem>
                <MenuItem onClick={() => handleClose("waiting")}>
                  Waiting List
                </MenuItem>
                <MenuItem onClick={() => handleClose("mybooks")}>
                  My Books
                </MenuItem>
                <MenuItem onClick={() => handleClose("logout")}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
