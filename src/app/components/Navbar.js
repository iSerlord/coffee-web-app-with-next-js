// app/components/NavBar.js
"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { AccountCircle, Settings, Language } from "@mui/icons-material";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/163996-200.png";

const NavBarContainer = styled(AppBar)`
  background-color: #333;
`;

const CustomToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const CustomBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavBarContainer position="sticky">
      <CustomToolbar sx={{ p: 2 }}>
        <CustomBox sx={{ gap: 2, pl: 2 }}>
          <CustomBox
            sx={{
              width: "auto",
            }}
          >
            <Box sx={{ mr: 1 }}>
              <Image src={logo} alt="logo" height={50} width={50}></Image>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mr: 2, fontFamily: "Cursive" }}>
                Coffee Friend
              </Typography>
            </Box>
          </CustomBox>
          <MenuItem sx={{ fontFamily: "Cursive" }}>Menu 1</MenuItem>
          <MenuItem sx={{ fontFamily: "Cursive" }}>Menu 2</MenuItem>
        </CustomBox>
        <CustomBox>
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
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          <IconButton color="inherit">
            <Language />
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </CustomBox>
      </CustomToolbar>
    </NavBarContainer>
  );
};

export default NavBar;
