import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "./cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function CartBadge() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  return (
    <Tooltip title="Cart">
      <NavLink to="/cart">
        <IconButton aria-label="cart" fontSize="larger">
          <StyledBadge
            badgeContent={totalQuantity}
            sx={{ color: "common.white" }}
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </NavLink>
    </Tooltip>
  );
}

export default CartBadge;
