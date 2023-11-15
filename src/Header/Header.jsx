import React, { useState } from "react";
import "./header.css";
import {
  ClickAwayListener,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  fontFamilies,
  headerTitles,
  pageView,
} from "../Constants/FontConstants";

const Header = () => {
  const [open, setOpen] = useState(false);
  const tabView = useMediaQuery(pageView.tabView);
  const padView = useMediaQuery(pageView.padView);
  const mobView = useMediaQuery(pageView.mobView);
  const navigate = useNavigate();
  return (
    <div className="header">
      <Typography
        fontFamily={fontFamilies.bold}
        sx={{ fontSize: { xs: 16, sm: 24, lg: 32 } }}
      >
        {headerTitles.appLogo}
      </Typography>
      {tabView ? (
        <>
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <MenuIcon
              fontSize={mobView ? "small" : padView ? "medium" : "large"}
              onClick={() => setOpen(!open)}
            />
          </ClickAwayListener>
          <Menu
            open={open}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            PaperProps={{
              style: {
                transform: padView
                  ? "translateX(-12%) translateY(30%)"
                  : "translateX(-15%) translateY(50%)",
              },
            }}
            MenuListProps={{
              style: {
                padding: 0,
              },
            }}
          >
            <MenuItem
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
            >
              {headerTitles.dropdownDashboard}
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/createAds");
                setOpen(false);
              }}
            >
              {headerTitles.dropdownCreateAds}
            </MenuItem>
          </Menu>
        </>
      ) : (
        <div className="nav-items">
          <NavLink
            to="/"
            style={{ textDecoration: "none", padding: "0px 45px" }}
          >
            <Typography
              fontFamily={fontFamilies.medium}
              sx={{ fontSize: { sm: 16, lg: 20 }, color: "black" }}
            >
              {headerTitles.dashboard}
            </Typography>
          </NavLink>
          <NavLink to="/createAds" style={{ textDecoration: "none" }}>
            <Typography
              fontFamily={fontFamilies.medium}
              sx={{ fontSize: { sm: 16, lg: 20 }, color: "black" }}
            >
              {headerTitles.createAds}
            </Typography>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
