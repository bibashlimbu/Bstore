import { NavLink } from "react-router-dom";

import { PermIdentity, StoreMallDirectoryOutlined } from "@mui/icons-material";
import { Button, Stack, Tooltip } from "@mui/material";
import CartBadge from "../feature/Cart/CartBadge";

import CategoriesMenu from "../feature/Categories/CategoriesMenu";

function NavbarMenu() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
    >
      <CategoriesMenu />
      <Tooltip title="Store">
        <Button component={NavLink} to="/store" sx={{ color: "common.white" }}>
          <StoreMallDirectoryOutlined />
        </Button>
      </Tooltip>
      <Tooltip title="Account">
        <Button
          component={NavLink}
          to="/account"
          sx={{ color: "common.white" }}
        >
          <PermIdentity />
        </Button>
      </Tooltip>
      <CartBadge />
    </Stack>
  );
}

export default NavbarMenu;
