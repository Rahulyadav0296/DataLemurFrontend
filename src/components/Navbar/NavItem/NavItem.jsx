import { Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ url, children }) {
  return (
    <Grid item>
      <NavLink to={url} style={{ textDecoration: "none" }}>
        <Typography variant="body1" sx={{ color: "#000" }}>
          {children}
        </Typography>
      </NavLink>
    </Grid>
  );
}

export default NavItem;
