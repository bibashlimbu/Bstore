import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <Typography
      variant="h6"
      to="/"
      color="common.white"
      component={NavLink}
      sx={{
        textDecoration: "none",
        color: "common.white",
        fontWeight: 600,
        fontSize: { sm: "1.5rem", xs: "1.2rem" },
      }}
    >
      BSTORE
    </Typography>
  );
}

export default Logo;
