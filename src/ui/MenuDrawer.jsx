import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";

import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import AccountIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import SearchQuery from "../feature/Search/SearchQuery";
import CategoriesMenu from "../feature/Categories/CategoriesMenu";
import { Stack } from "@mui/material";

export default function MenuDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleListItemClick = (index) => {
    const handleClick = handleClickMap[index];
    if (handleClick) {
      handleClick();
    }

    toggleDrawer(false)();
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleStoreClick = () => {
    navigate("/store");
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  const handleClickMap = {
    0: handleHomeClick,
    1: handleStoreClick,
    2: handleAccountClick,
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100% ",
        backgroundColor: "primary.main",
        p: 2,
      }}
      role="presentation"
    >
      <SearchQuery display={"flex"} />
      <List>
        {["Home", "Store", "Account"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(index)}>
              <ListItemIcon>
                {index === 0 && <HomeIcon sx={{ color: "common.white" }} />}
                {index === 1 && <StoreIcon sx={{ color: "common.white" }} />}
                {index === 2 && <AccountIcon sx={{ color: "common.white" }} />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "common.white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack direction="row" px={2} gap={2.8}>
        <CategoryIcon sx={{ color: "common.white" }} />
        <CategoriesMenu />
      </Stack>
    </Box>
  );

  return (
    <Box
      component="div"
      sx={{
        display: { xs: "block", sm: "block", md: "none" },
      }}
    >
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "common.white" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
