import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MenuDrawer from "./MenuDrawer";
import { Box, Container, Slide, Stack, useScrollTrigger } from "@mui/material";

import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import SearchQuery from "../feature/Search/SearchQuery";
import CartBadge from "../feature/Cart/CartBadge";

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavBar(props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="xl">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 1 }}
            >
              <MenuDrawer />
              <Logo />
              <SearchQuery display={"none"} />
              <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <CartBadge />
              </Box>
              <NavbarMenu />
            </Stack>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}

export default NavBar;
