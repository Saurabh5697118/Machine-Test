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

const Header = () => {
  const [open, setOpen] = useState(false);
  const tabView = useMediaQuery("(max-width:750px)");
  const padView = useMediaQuery("(max-width:600px)");
  const mobView = useMediaQuery("(max-width:400px)");
  const navigate = useNavigate();
  return (
    <div className="header">
      <Typography
        fontFamily={"Montserrat-Bold"}
        sx={{ fontSize: { xs: 16, sm: 24, lg: 32 } }}
      >
        APP LOGO
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
              Dashboard
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/createUser");
                setOpen(false);
              }}
            >
              Create Ads
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
              fontFamily={"Montserrat-Medium"}
              sx={{ fontSize: { sm: 16, lg: 20 }, color: "black" }}
            >
              DASHBOARD
            </Typography>
          </NavLink>
          <NavLink to="/createAds" style={{ textDecoration: "none" }}>
            <Typography
              fontFamily={"Montserrat-Medium"}
              sx={{ fontSize: { sm: 16, lg: 20 }, color: "black" }}
            >
              CREATE ADS
            </Typography>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
