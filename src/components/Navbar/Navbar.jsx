import { AppBar, Button, Grid, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem/NavItem";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", boxShadow: "none" }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <IconButton edge="start" sx={{ p: 0 }}>
                <img
                  src="https://datalemur.com/Logo.svg"
                  alt="Logo of the dataLemur"
                  style={{ height: 40 }}
                />
              </IconButton>
            </NavLink>
          </Grid>

          <Grid item>
            <Grid container spacing={4}>
              <NavItem url="/questions">Practice Interview Questions</NavItem>
              <NavItem url="/sql-tutorial">Learn SQL</NavItem>
            </Grid>
          </Grid>

          <Grid item>
            <NavLink to="/sign-in" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{ borderColor: "#000", color: "#000" }}
              >
                Sign In
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
